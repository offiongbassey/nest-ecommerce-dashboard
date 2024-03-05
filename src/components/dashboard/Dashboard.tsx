import Button from "../Button";
import { FaWpforms } from "react-icons/fa6";
import Report from "./Report";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaTruck } from "react-icons/fa6";
import Analysis from "./Analysis";
import LatestOrders from "./LatestOrders";

const Dashboard = () => {
  return (
    <section className="text-green-30 pt-32 ">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div>
                <h2 className="text-2xl font-[600]">Dashboard</h2>
                <p className="font-[500]">Whole data about your business here</p>
            </div>
            <div>
            <Button type="button" variant="btn_green"><FaWpforms size={25} />Create report</Button>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-6">
            <Report name="Revenu" figure="$13,456.5" desc="Shipping fee are not included"><div className="p-4 bg-green-50 rounded-full"><AiFillDollarCircle size={25} className="text-green-10" /></div></Report>
            <Report name="Orders" figure="53.668" desc="Excluding orders in transit"><div className="p-4 bg-green-20 rounded-full"><FaTruck size={25} className="text-green-10" /></div></Report>
            <Report name="Products" figure="9.836" desc="In 19 Categories"><div className="p-4 bg-orange-20 rounded-full"><AiFillDollarCircle size={25} className="text-orange-10" /></div></Report>
            <Report name="Monthly Earning" figure="$6,928.5" desc="Based in your local time"><div className="p-4 bg-green-50 rounded-full"><AiFillDollarCircle size={25} className="text-blue-10" /></div></Report>
        </div>
        <Analysis />
        <LatestOrders />
    </section>
  )
}

export default Dashboard
