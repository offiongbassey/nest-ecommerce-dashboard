"use client";

import Link from "next/link"
import Button from "../Button"
import Input from "../Input"
import ProductList from "./ProductList"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { getProducts } from "@/redux/features/product/productSlice"

const Product = () => {
    const { token } = useAppSelector((state => state.user.user));
    const { products } = useAppSelector((state) => state.product);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if(typeof(window) !== undefined){
            dispatch(getProducts(token));
        }
    }, [])
  return (
    <div className="padding-container pt-32 text-green-30 w-full">
     <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div>
            <h2 className="text-2xl font-[600]">Product List</h2>
            <p>List of all your products</p>
        </div>
        <div className="grid grid-cols-2 md:flex gap-2 items-center">
            <Button type="button" variant="btn_green_outline">Export</Button>
            <Button type="button" variant="btn_green_outline">Import</Button>
            <Link href="/dashboard/product/create"><Button type="button" variant="btn_green">Create New</Button></Link>
        </div>
     </div>
     <div className="bg-white rounded-2xl border border-gray-20 my-6">
        <div className="flex flex-col md:flex-row gap-2 p-6 items-center justify-between">
            <div className="md:w-[30%]">
                <select className="primary-select w-full">
                        <option>All Category</option>
                        <option>Snacks</option>
                        <option>Fruits</option>
                    </select>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
                <Input type="date" name="date" placeholder="" variant="primary-input" />
                <select className="primary-select">
                <option>Status</option>
                <option>Active</option>
                <option>Draft</option>
            </select>
            </div>
        </div>
        <hr/>
        <ProductList products={products} />
     </div>
    </div>
  )
}

export default Product
