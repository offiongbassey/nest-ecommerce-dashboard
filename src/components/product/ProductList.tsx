import React from 'react'
import Button from '../Button';
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin2Line } from "react-icons/ri";
import { TitleCase } from '@/utils/TitleCase';
import Link from 'next/link';

type ProductAttributes = {
    name: string;
    id: number;
    promo_price: number;
    slug: string;
    product_code: string;
    regulart_price: number;
    currency: string;
    product_images: [ImageAttributes];
    status: string;
}

type ImageAttributes = {
    image_url: string;
    image: string;
}

const ProductList = ({ products }: { products: ProductAttributes[]}) => {
  return (
    <div className='relative overflow-x-auto'>
        <table className='w-full'>
            <tbody>
                {products.map((product: ProductAttributes) => 
                { const img = product?.product_images[0]?.image_url; return(
                <tr key={product.id} className='border-b border-gray-20'>
                    <td className='px-6 py-3 flex ga-2 items-center gap-4'><div style={{backgroundImage: `url("${img}")`}} className='bg-center bg-contain bg-no-repeat p-8' /> {product.name}</td>
                    <td className='px-4 py-3 text-center'>{`${product.currency} ${product.promo_price}`}</td>
                    <td className='px-4 py-3 text-center'><span className='px-6 py-2 bg-green-50 text-green-10 rounded-2xl font-bold'>{TitleCase(product.status)}</span></td>
                    <td className='px-4 py-3 text-center'>{product.product_code}</td>
                    <td className='px-4 py-3'><div className='flex gap-2 items-center justify-end'><Link href={`/dashboard/product/update/${product.id}`}><Button type='button' variant='btn_green' size='small'><CiEdit />Edit</Button></Link> <Button type='button' variant='btn_green_outline' size='small'><RiDeleteBin2Line />Delete</Button></div></td>
                </tr>
                )})}
                
            </tbody>
        </table>
    </div>
  )
}

export default ProductList
