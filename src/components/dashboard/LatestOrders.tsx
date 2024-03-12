import React from 'react';
import Button from '../Button';
import { CiCreditCard1 } from "react-icons/ci";

const LatestOrders = () => {
  return (
    <div className='bg-white rounded-2xl border border-gray-20 my-6'>
        <div className='p-4'>
            <h4 className='text-green-30 font-[600] text-xl'>Latest orders</h4>
            <div className='flex flex-col md:flex-row gap-4 md:items-center justify-between py-6'>
                <select className="primary-select">
                    <option>All Categories</option>
                    <option>Drinks</option>
                    <option>Food</option>
                    <option>Snacks</option>
                </select>
                <div className='flex gap-4 items-center'>
                <input type="date" className="focus:outline-none px-6 py-2 rounded-md bg-gray-90" />
                <select className="primary-select">
                    <option>Status</option>
                    <option>Pending</option>
                    <option>Ordered</option>
                    <option>Delivered</option>
                    <option>Rejected</option>
                </select>
                </div>
            </div>
        </div>
        <hr/>
        <div className='p-4 relative overflow-x-auto'>
            <table className='w-full text-left'>
                <thead className='bg-gray-30'>
                    <tr>
                        <th className='px-4 py-3'>Order Id</th>
                        <th className='px-4 py-3'>Billing Name</th>
                        <th className='px-4 py-3'>Date</th>
                        <th className='px-4 py-3'>Total</th>
                        <th className='px-4 py-3'>Payment Status</th>
                        <th className='px-4 py-3'>Payment Method</th>
                        <th className='px-4 py-3'>View Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='px-4 py-3 text-green-10'>#SK254</td>
                        <td className='px-4 py-3'>Neal Matthews</td>
                        <td className='px-4 py-3'>07 Oct, 2021</td>
                        <td className='px-4 py-3'>$400</td>
                        <td className='px-4 py-3'><span className='px-4 py-2 text-green-10 bg-green-50 rounded-md font-[600]'>Paid</span></td>
                        <td className='px-4 py-5 flex gap-2 items-center'><CiCreditCard1  size={25}/>Mastercard</td>
                        <td className='px-4 py-3'><Button type="button" variant="btn_green" size="small">View Details</Button></td>
                    </tr>
                    <tr>
                        <td className='px-4 py-3 text-green-10'>#SK254</td>
                        <td className='px-4 py-3'>Neal Matthews</td>
                        <td className='px-4 py-3'>07 Oct, 2021</td>
                        <td className='px-4 py-3'>$400</td>
                        <td className='px-4 py-3'><span className='px-4 py-2 text-green-10 bg-green-50 rounded-md font-[600]'>Paid</span></td>
                        <td className='px-4 py-5 flex gap-2 items-center'><CiCreditCard1  size={25}/>Mastercard</td>
                        <td className='px-4 py-3'><Button type="button" variant="btn_green" size="small">View Details</Button></td>
                    </tr>
                    <tr>
                        <td className='px-4 py-3 text-green-10'>#SK254</td>
                        <td className='px-4 py-3'>Neal Matthews</td>
                        <td className='px-4 py-3'>07 Oct, 2021</td>
                        <td className='px-4 py-3'>$400</td>
                        <td className='px-4 py-3'><span className='px-4 py-2 text-green-10 bg-green-50 rounded-md font-[600]'>Paid</span></td>
                        <td className='px-4 py-5 flex gap-2 items-center'><CiCreditCard1  size={25}/>Mastercard</td>
                        <td className='px-4 py-3'><Button type="button" variant="btn_green" size="small">View Details</Button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default LatestOrders
