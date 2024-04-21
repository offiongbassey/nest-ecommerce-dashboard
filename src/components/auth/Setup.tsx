"use client";

import { useForm } from "react-hook-form"
import Button from "../Button"
import { yupResolver } from "@hookform/resolvers/yup"
import { SetupSchemaType, setupSchema } from "@/validations/userSchema";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { setupAccount } from "@/redux/features/userSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Setup = () => {

    const { token, is_verified } = useAppSelector((state) => state.user.user);

    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if(!token){
            router.push("/login");
        }else if(is_verified){
            router.push("/dashboard");
        }
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver<SetupSchemaType>(setupSchema)
    });

    const onSubmit = async(data: SetupSchemaType) => {
        const response = await dispatch(setupAccount({data, token}));
        if(response.payload.success){
            router.push("/dashboard");
        }
    }
  return (
    <section className="flex items-center justify-center bg-gray-90 p-4">
        <div className="border border-gray-20 rounded-2xl bg-white p-6 my-20 w-full md:min-w-[400px] lg:min-w-[600px] md:max-w-[880px]">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="font-bold text-green-30 mb-6">Account Setup</h2>
                <hr/>
                
                <div className="md:grid md:grid-cols-2 gap-2">
                    <div>
                        <label className="block mt-6 mb-2">Business Name</label>
                        <input
                            type="text"
                            placeholder="Business Name"
                            className="primary-input w-full"
                            {...register("name")}
                            />
                        <span className="text-red-400">{errors.name?.message}</span>
                    </div>

                    <div>
                        <label className="block mt-6 mb-2">Email Address</label>
                        <input 
                            type="text"
                            placeholder="Email Address"
                            className="primary-input w-full"
                            {...register("email")}
                            />
                        <span className="text-red-400">{errors.email?.message}</span>
                    </div>

                    <div>
                        <label className="block mt-6 mb-2">Phone Number</label>
                        <input 
                            type="text"
                            placeholder="Phone Number"
                            className="primary-input w-full"
                            {...register("phone")}
                            />
                        <span className="text-red-400">{errors.phone?.message}</span>
                    </div>

                    <div>
                        <label className="block mt-6 mb-2">Address</label>
                        <input 
                            type="text"
                            placeholder="Business Address"
                            className="primary-input w-full"
                            {...register("address")}
                            />
                        <span className="text-red-400">{errors.address?.message}</span>
                    </div>

                    <div>
                        <label className="block mt-6 mb-2">State</label>
                        <input 
                            type="text"
                            placeholder="State"
                            className="primary-input w-full"
                            {...register("state")}
                            />
                        <span className="text-red-400">{errors.state?.message}</span>
                    </div>

                    <div>
                        <label className="block mt-6 mb-2">City</label>
                        <input 
                            type="text"
                            placeholder="City"
                            className="primary-input w-full"
                            {...register("city")}
                            />
                        <span className="text-red-400">{errors.city?.message }</span>
                    </div>
                </div>

                <label className="block mt-6 mb-2">Description</label>
                <textarea className="primary-input w-full" 
                {...register("desc")}
                rows={4}
                placeholder="Briefly ell us about your business.">
                </textarea>
                <span className="text-red-400">{errors.desc?.message}</span>
                <Button type="submit" full={true} variant="btn_green">Proceed</Button>
            </form>
        </div>
    </section>
  )
}

export default Setup
