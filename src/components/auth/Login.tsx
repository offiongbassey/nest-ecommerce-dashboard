import Image from "next/image"
import Button from "../Button"
import Input from "../Input"
import Link from "next/link"

const Login = () => {
  return (
    <section className="flex items-center justify-center bg-gray-90">
      <div className="border border-gray-20 rounded-2xl bg-white p-6 my-32 w-[380px]">
        <h2 className="text-2xl text-green-30 font-[600] mb-6">Sign in</h2>
        <div className="flex flex-col gap-4  mb-6">
            <Input
            type="email"
            name="email"
            placeholder="Username or email"
            variant="primary-input"
            />
            <Input
            type="password"
            name="password"
            placeholder="Password"
            variant="primary-input"
            />
        </div>
       
        <Button type="button" full={true} variant="btn_green">
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
      </div>
    </section>
  )
}

export default Login
