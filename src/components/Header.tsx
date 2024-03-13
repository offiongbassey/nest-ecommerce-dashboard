import { IoIosNotifications } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
          <div className="padding-container bg-white border-b border-gray-20  z-30 fixed w-full lg:w-[100%]">
            <div className="py-[19.5px] flex gap-4 items-center justify-end md:justify-between">
                <div className="hidden md:flex items-center">
                    <input type="text" placeholder="Search Item" className="focus:outline-none px-6 py-2 rounded-s-md bg-gray-80 border-r border-gray-20" />
                    <button type="button" className="px-6 py-3 rounded-e-md bg-gray-30"><IoIosSearch className="text-gray-10" /></button>
                </div>
                <div className="flex gap-4 mr-2 md:mr-10 lg:mr-52">
                    <IoIosNotifications className="text-gray-50" size={25} />
                    <MdDarkMode className="text-gray-50" size={25} />
                    <FaUserLarge className="text-gray-50" size={22} />
                </div>
            </div>
        </div>
  )
}

export default Header
