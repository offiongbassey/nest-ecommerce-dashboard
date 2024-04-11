"use client"

import { logOut, loginUser } from "@/redux/features/userSlice" 
import { useDispatch } from "react-redux"
import Image from "next/image"
import Button from "../Button"
import Link from "next/link"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { LoginSchemaType, loginSchema } from "@/validations/userSchema"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const Login = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { token } = useAppSelector((state) => state.user.user);
  const router = useRouter();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm ({
    resolver: yupResolver<LoginSchemaType>(loginSchema)
  });

  const onSubmit = async (data: LoginSchemaType) => {
    
    const response = await dispatch(loginUser(data));
    if(response.payload.statusCode === 200){
      router.push('/dashboard');
    }
  }

  useEffect(() => {
    if(token){
      router.push("/dashboard");
    }
  }, [token])

  return (
    <section className="flex items-center justify-center bg-gray-90">
      <div className="border border-gray-20 rounded-2xl bg-white p-6 my-32 w-[380px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl text-green-30 font-[600] mb-6">Sign in</h2>
        <div className="flex flex-col gap-4  mb-6">
        <input 
          type="email" 
          placeholder="Username or email" 
          className="primary-input w-full" 
          autoComplete="yes"
          {...register("email")}
          />
          <span className="text-red-400">{errors.email?.message}</span>
           <input 
          type="password" 
          placeholder="Password" 
          className="primary-input w-full" 
          autoComplete="yes"
          {...register("password")}
          />
          <span className="text-red-400">{errors.password?.message}</span>
        </div>
       
        <Button type="submit" full={true} variant="btn_green">
          Login
        </Button>
        <p className="text-gray-10 text-sm py-4 text-center">or sign in with</p>
         <div className="flex flex-col gap-4">
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
       
        <p className="text-center my-6">
          Don't have an account?{" "}
          <Link className="text-green-10" href="/signup">
            Sign Up
          </Link>
        </p>
      </form>
      </div>
    </section>
  )
}

export default Login
