import Button from "../Button";
import { MdDateRange } from "react-icons/md";
import { FaPrint } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaTruck } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import OrderSummary from "./OrderSummary";
import Link from "next/link";

const OrderDetail = () => {
  return (
    <div className="text-green-30 pt-32 padding-container">
        <h2 className="text-2xl font-[600]">Order Detail</h2>
        <p>Details for Order ID: 3453012</p>
        <div className="bg-white rounded-2xl border border-gray-20 p-6 my-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-2"> 
                <div>
                    
                    <h4 className="flex gap-1"><MdDateRange size={22} /> Wed, Aug, 13, 2023, 4:45PM</h4>
                    <p className="text-gray-10">Order ID: 3453012</p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-2">
                    <select className="primary-select">
                        <option>Change Status</option>
                        <option>Approved</option>
                        <option>Declined</option>
                        <option>Delivered</option>
                    </select>
                    <div className="flex gap-2">
                        <Button type="button" variant="btn_green">Save</Button>
                        <Button type="button" variant="btn_gray"><FaPrint size={24}/></Button>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <div className="bg-white rounded-2xl border border-gray-20 p-6 mb-6 text-green-30">
            <div className="flex flex-col md:flex-row md:items-center justify-normal gap-4 md:gap-10 lg:gap-32">
                <div className="flex gap-4">
                    <div className="bg-green-50 text-green-10 h-16 px-5 py-4 rounded-full" >
                        <FaUser size={26} />
                    </div>
                    <div>
                        <h4 className="text-xl font-[500]">Customer</h4>
                        <p>John Alexander</p>
                        <p>alex@gmail.com</p>
                        <p>+2348097635677</p>
                        <span className="text-green-10"><Link href="/">View profile</Link></span>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="bg-green-50 text-green-10 h-16 px-5 py-4 rounded-full" >
                        <FaTruck size={26} />
                    </div>
                    <div>
                        <h4 className="text-xl font-[500]">Order Info</h4>
                        <p>Shipping: Fargo express</p>
                        <p>Pay method: Card</p>
                        <p>Status: new</p>
                        <span className="text-green-10"><Link href="/">Download info</Link></span>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="bg-green-50 text-green-10 h-16 px-5 py-4 rounded-full" >
                        <IoLocationSharp size={26} />
                    </div>
                    <div>
                        <h4 className="text-xl font-[500]">Deliver to</h4>
                        <p>City: Tashkent, Uzbekistan</p>
                        <p>Block A House 123, Floor 2</p>
                        <p>PO Box 10000</p>
                        <span className="text-green-10"><Link href="/">View profile</Link></span>
                    </div>
                </div>
            </div>

            <div className="mt-16">
                <OrderSummary />
            </div>
        </div>
    </div>
  )
}

export default OrderDetail
