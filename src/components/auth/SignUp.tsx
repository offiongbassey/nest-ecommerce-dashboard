"use client"

import Link from "next/link";
import Button from "../Button";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchemaType, signUpSchema } from "@/validations/userSchema";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { registerUser } from "@/redux/features/userSlice";
import { useRouter } from "next/navigation";

const SignUp = () => {

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver<SignUpSchemaType>(signUpSchema)
  });

  const onSubmit = async (data:SignUpSchemaType) => {
    
    const response = await dispatch(registerUser(data));
    if(response.payload.success){
      router.push("/login");
    }
  }

  return (
    <section className="flex items-center justify-center bg-gray-90">
      <div className="border border-gray-20 rounded-2xl bg-white p-6 my-20 max-w-[380px]">
        <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl text-green-30 font-[600]">Create an Account</h2>
        <label className="block mt-6 mb-2">Frist Name</label>
        <input 
            type="text" 
            placeholder="First Name"
            className="primary-input w-full"
            {...register("first_name")}
            autoComplete="yes"
          />
       
        <span className="text-red-400">{errors.first_name?.message}</span>
        <label className="block mt-6 mb-2">Last Name</label>
        <input 
            type="text" 
            placeholder="Last Name"
            className="primary-input w-full"
            {...register("last_name")}
            autoComplete="yes"
          />
       
        <span className="text-red-400">{errors.last_name?.message}</span>
        <label className="block mt-6 mb-2">Email</label>
        <input 
            type="email" 
            placeholder="Your email"
            className="primary-input w-full"
            {...register("email")}
            autoComplete="yes"
          />
       
        <span className="text-red-400">{errors.email?.message}</span>
        <label className="block mt-6 mb-2">Phone</label>
        <div className="flex gap-3">
          <div className="w-[30%]">
          <input 
            type="text" 
            placeholder="_998"
            className="primary-input w-full"
            autoComplete="yes"
          />
          </div>
          <input 
            type="text" 
            placeholder="Phone"
            className="primary-input w-full"
            {...register("phone")}
            autoComplete="yes"
          />
          
        </div>
        <span className="text-red-400">{errors.phone?.message}</span>
        <label className="block mt-6 mb-2">Create Password</label>
        <input 
            type="password" 
            placeholder="Password"
            className="primary-input w-full"
            {...register("password")}
            autoComplete="yes"
          />
       
        <span className="text-red-400">{errors.password?.message}</span>
        <p className="text-gray-10 text-sm py-4 text-center">
          By signin up, you confirm that you've read and accepted our User
          Notice and Privacy Policy.
        </p>
        <Button type="submit" full={true} variant="btn_green">
          Create Account
        </Button>
        <p className="text-gray-10 text-sm py-4 text-center">or sign up with</p>
        <div className="flex gap-2 mb-4">
          <Button type="button" full={true} variant="btn_green_outline">
            <Image src="/google.png"
            alt="google"
            width={20}
            height={10}
            />
            Google
          </Button>
          <Button type="button" full={true} variant="btn_green_outline">
            <Image 
            src="/facebook.png"
            alt="facebook"
            width={20}
            height={20}
            />
            Facebook
          </Button>
        </div>
        <p className="text-center">
          Already have an account?{" "}
          <Link className="text-green-10" href="/">
            Sign in now
          </Link>
        </p>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
