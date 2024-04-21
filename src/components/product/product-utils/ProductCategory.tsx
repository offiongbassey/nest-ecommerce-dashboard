"use client"

import { useEffect, useState } from "react";
import Input from "../../Input";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { getCategories, getSubCategories } from "@/redux/features/product/productSlice";
import toast from "react-hot-toast";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface Category {
    id: number;
    name: string;
}

interface SubCategory {
    id: number;
    name: string;
}

type Props = {
    register: any;
    errors: any;
    quantity?: number;
    category?: { id: number, name: string }
    sub_category?: { id: number, name: string }
    handleInputChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
const ProductCategory = ({ register, errors, quantity, category, sub_category, handleInputChange }: Props) => {
    const { categories, sub_categories } = useAppSelector((state) => state.product);
    const [toggleSubCategory, setToggleSubCategory] = useState(true);

    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        if(typeof(window) !== undefined){
         dispatch(getCategories());
        }
    }, []);

    const handleCategory = (e: any) => {
        const category = parseInt(e.target.value);
        if(category === 0){
            toast.error("Select Category");
        }else{
            setToggleSubCategory(false);
            dispatch(getSubCategories(category));
        }
    }

  return (
    <div className="bg-white rounded-2xl border border-gray-20 mb-6">
                <div className="p-6">
                    <h4 className="text-xl font-[600]">Organization</h4>
                </div>
                <hr/>
                <div className="p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                       <div>
                            <label htmlFor="category_id" className="block mb-3">Category</label>
                            <select className="primary-select w-full"  {...register("category_id")} onChange={handleCategory}>
                             {category ? (<option value={category.id}>{category.name}</option>) : (<option value={0}>Select</option>)}   
                            { //filter category if edit product
                            category?.id ?
                            categories.filter((cat: Category) => cat.id !== category.id).map((item: Category) => (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            ))
                            : categories.map((category: Category) =>  (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                            </select>
                            <span className="text-red-400">{errors.category_id?.message}</span>
                       </div>
                       <div>
                            <label htmlFor="sub_category_id" className="block mb-3 text-nowrap">Sub-category</label>
                            <select className="primary-select w-full" {...register("sub_category_id")}>
                            {sub_category && toggleSubCategory ? (<option value={sub_category.id}>{sub_category.name}</option>) : (<option value={0}>Select</option>)}
                            {//filter map if edit product
                            sub_category?.id && toggleSubCategory ?
                            sub_categories.filter((sub: SubCategory) => sub.id !== sub_category.id).map((item: SubCategory) => (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            ))
                            : sub_categories.map((sub_category: SubCategory) => (
                                <option key={sub_category.id} value={sub_category.id}>{sub_category.name}</option>
                           ))}
                            </select>
                            <span className="text-red-400">{errors.sub_category_id?.message}</span>
                       </div>
                    </div>
                    
                   
                    <label htmlFor="quantity" className="block mt-4 mb-2">Quantity</label>
                    <input 
                        {...register("quantity")}
                        type="number"
                        className="primary-input w-full"
                        placeholder="Quantity"
                        value={quantity}
                        onChange={handleInputChange}

                    />
                    <span className="text-red-400">{errors.quantity?.message}</span>
                  
                </div>
            </div>
  )
}

export default ProductCategory
