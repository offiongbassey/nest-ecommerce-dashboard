import Link from "next/link";
import Button from "../Button";
import Input from "../Input";
import Image from "next/image";

const SignUp = () => {
  return (
    <section className="flex items-center justify-center bg-gray-90">
      <div className="border border-gray-20 rounded-2xl bg-white p-6 my-20 max-w-[380px]">
        <h2 className="text-2xl text-green-30 font-[600]">Create an Account</h2>
        <label className="block mt-6 mb-2">Email</label>
        <Input
          type="email"
          name="email"
          placeholder="Your email"
          variant="primary-input"
        />
        <label className="block mt-6 mb-2">Phone</label>
        <div className="flex gap-3">
          <div className="w-[30%]">
            <Input
              type="text"
              placeholder="+998"
              variant="primary-input"
              name="phone_tag"
            />
          </div>
          <Input
            type="text"
            placeholder="Phone"
            variant="primary-input"
            name="phone"
          />
        </div>
        <label className="block mt-6 mb-2">Create Password</label>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          variant="primary-input"
        />
        <p className="text-gray-10 text-sm py-4 text-center">
          By signin up, you confirm that you've read and accepted our User
          Notice and Privacy Policy.
        </p>
        <Button type="button" full={true} variant="btn_green">
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
      </div>
    </section>
  );
};

export default SignUp;
