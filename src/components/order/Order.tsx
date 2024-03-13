import React from 'react';
import Input from '../Input';
import Button from '../Button';
import Link from 'next/link';

const Order = () => {
  return (
    <div className='text-green-30 pt-32 padding-container'>
      <div className='flex items-center justify-between'>
        <div>
            <h2 className='text-2xl font-[600]'>Order List</h2>
            <p>List of all your Orders</p>
        </div>
        <div>
            <Input name='search_order' type='text' placeholder='Search Order ID' variant='primary-input' />
        </div>
      </div>

    {/*  Table Section */}
      <div className='rounded-2xl bg-white my-6 border border-gray-20'>
        <div className='p-6'>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-10 lg:gap-40'>
                <div className='flex flex-1'>
                     <Input name='search_order' type='text' placeholder='Search...' variant='primary-input' />
                </div>
               <div className='flex flex-1 md:justify-end'>
                <select className='primary-select mr-4'>
                    <option>Status</option>
                </select>
                <select className='primary-select'>
                    <option>Show 20</option>
                </select>
               </div>
            </div>
        </div>
        <hr/>
        <div className='relative overflow-x-auto p-6 '>
            <table className='w-full text-left'>
                <thead>
                    <tr className='bg-gray-90'>
                        <th className='px-4 py-3'>#ID</th>
                        <th className='px-4 py-3'>Name</th>
                        <th className='px-4 py-3'>Email</th>
                        <th className='px-4 py-3'>Total</th>
                        <th className='px-4 py-3'>Status</th>
                        <th className='px-4 py-3'>Date</th>
                        <th className='px-4 py-3'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='px-4 py-3'>0901</td>
                        <td className='px-4 py-3'>Marvin McKiney</td>
                        <td className='px-4 py-3'>marvin@gmail.com</td>
                        <td className='px-4 py-3'>$9.5</td>
                        <td className='px-4 py-3'><span className='px-3 py-2 rounded-2xl bg-green-50 text-green-10 font-bold'>received</span></td>
                        <td className='px-4 py-3'>03.12.2020</td>
                        <td className='px-4 py-3 flex gap-2'><Link href="/dashboard/order-detail"><Button type="button" variant="btn_green">Detail</Button></Link><Button type='button' variant='btn_green_outline'>...</Button></td>
                    </tr>
                    <tr>
                        <td className='px-4 py-3'>0901</td>
                        <td className='px-4 py-3'>Marvin McKiney</td>
                        <td className='px-4 py-3'>marvin@gmail.com</td>
                        <td className='px-4 py-3'>$9.5</td>
                        <td className='px-4 py-3'><span className='px-3 py-2 rounded-2xl bg-green-50 text-green-10 font-bold'>received</span></td>
                        <td className='px-4 py-3'>03.12.2020</td>
                        <td className='px-4 py-3 flex gap-2'><Link href="/dashboard/order-detail"><Button type="button" variant="btn_green">Detail</Button></Link><Button type='button' variant='btn_green_outline'>...</Button></td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default Order
