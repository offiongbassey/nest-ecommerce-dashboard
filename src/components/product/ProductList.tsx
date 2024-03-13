import React from 'react'
import Button from '../Button';
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin2Line } from "react-icons/ri";

const ProductList = () => {
  return (
    <div className='relative overflow-x-auto'>
        <table className='w-full'>
            <tbody>
                <tr className='border-b border-gray-20'>
                    <td className='px-6 py-3 flex ga-2 items-center gap-4'><div style={{backgroundImage: `url("./product-1.png")`}} className='bg-center bg-contain bg-no-repeat p-8' /> Seeds of Change Organic Quato</td>
                    <td className='px-4 py-3 text-center'>$34.50</td>
                    <td className='px-4 py-3 text-center'><span className='px-6 py-2 bg-green-50 text-green-10 rounded-2xl font-bold'>Active</span></td>
                    <td className='px-4 py-3 text-center'>02.11.2021</td>
                    <td className='px-4 py-3'><div className='flex gap-2 items-center justify-end'><Button type='button' variant='btn_green' size='small'><CiEdit />Edit</Button> <Button type='button' variant='btn_green_outline' size='small'><RiDeleteBin2Line />Delete</Button></div></td>
                </tr>
                <tr className='border-b border-gray-20'>
                    <td className='px-6 py-3 flex ga-2 items-center gap-4'><div style={{backgroundImage: `url("./product-1.png")`}} className='bg-center bg-contain bg-no-repeat p-8' /> Seeds of Change Organic Quato</td>
                    <td className='px-4 py-3 text-center'>$34.50</td>
                    <td className='px-4 py-3 text-center'><span className='px-6 py-2 bg-green-50 text-green-10 rounded-2xl font-bold'>Active</span></td>
                    <td className='px-4 py-3 text-center'>02.11.2021</td>
                    <td className='px-4 py-3'><div className='flex gap-2 items-center justify-end'><Button type='button' variant='btn_green' size='small'><CiEdit />Edit</Button> <Button type='button' variant='btn_green_outline' size='small'><RiDeleteBin2Line />Delete</Button></div></td>
                </tr>
                
            </tbody>
        </table>
    </div>
  )
}

export default ProductList
