'use client';

import Image from "next/image";
import SidebarList from "./SidebarList";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { IoClose } from "react-icons/io5";


const Sidebar = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <>
    <div className="w-[5%] lg:w-[16%] z-40">
        <div className="lg:hidden fixed bg-white h-[65px] p-4 md:h-20 border-b border-gray-20">
            <button onClick={() => setToggle((prev) => !prev)} className="">
                    <IoIosMenu size={30} />
            </button>
        </div>
        <div className={`${!toggle ? "hidden lg:block" : "absolute" } border-r border-gray-20 bg-white h-screen fixed`}>
            <div className="flex gap-14 items-center justify-between border-b border-gray-20 px-4 py-6">
                <Image 
                src="/logo.svg"
                alt="logo"
                width={100}
                height={20}
                />
                <button onClick={() => setToggle((prev) => !prev)} className={`${toggle ? "" : "block lg:hidden"}`}>
                    <IoClose className="text-gray-10"  size={30} />
                </button>
            </div>
            <SidebarList />
        </div>
    </div>
    </>
  )
}

export default Sidebar
