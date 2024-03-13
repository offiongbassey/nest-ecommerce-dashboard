import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { BsFillCartCheckFill } from "react-icons/bs";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

const SidebarList = () => {
  return (
    <div className="text-green-30 font-[600] p-6">
      <ul className="flex flex-col gap-2">
            <li className="p-2 rounded-md">
                <Link href="/" className="flex gap-4 items-center" ><MdDashboard className="text-gray-50" size={20} /> Dashboard</Link>
            </li>
            <li className="p-2 rounded-md">
                <Link href="/product" className="flex gap-4 items-center" ><FaBagShopping className="text-gray-50" size={20} /> Products</Link>
            </li>
            <li className=" bg-green-50 p-2 rounded-md">
                <Link href="/order" className="flex gap-4 items-center" ><BsFillCartCheckFill className="text-gray-50" size={20} /> Orders</Link>
            </li>
            <li className="p-2 rounded-md">
                <Link href="/transaction" className="flex gap-4 items-center" ><AiOutlineTransaction className="text-gray-50" size={20} /> Transactions</Link>
            </li>
            <li className="p-2 rounded-md">
                <Link href="/profile" className="flex gap-4 items-center" ><FaUserAlt className="text-gray-50" size={20} /> Account</Link>
            </li>
      </ul>
    </div>
  )
}

export default SidebarList
