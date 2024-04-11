"use client";

import Dashboard from "@/components/dashboard/Dashboard";
import {  } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";


const page = () => {
  // const { token } = useAppSelector(state => state.user.user);
  // const router = useRouter();

  // useLayoutEffect(() => {
  //   if(!token){
  //     router.push("/")
  //   }
  // })
  return (
    <main className="padding-container w-full">
    <Dashboard />
  </main>
  )
}

export default page
