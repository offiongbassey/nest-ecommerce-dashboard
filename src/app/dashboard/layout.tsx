"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store";
import { useEffect } from "react";

export default function MainLayout({ children }: Readonly<{
    children: React.ReactNode
}>) {
    const { token, is_verified } = useAppSelector((state) => state.user.user); 
    const router = useRouter();

    useEffect(() => {
      if(!token){
        router.push("/login");
      }else if(!is_verified){
        router.push("/login");
      }
      }, [token, router]); 

    return (
        <div className="flex bg-gray-30">
            <Header />
             <Sidebar />
            {children}
        </div>
    );
  }