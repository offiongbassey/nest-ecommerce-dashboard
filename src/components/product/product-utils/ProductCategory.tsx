"use client"

import { useEffect } from "react";
import Input from "../../Input";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { getCategories, getSubCategories } from "@/redux/features/product/productSlice";
import toast from "react-hot-toast";

interface Category {
    id: number;
    name: string;
}

interface SubCategory {
    id: number;
    name: string;
}

const ProductCategory = () => {
    const { categories, sub_categories } = useAppSelector((state) => state.product);

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
                            <label className="block mb-3">Category</label>
                            <select className="primary-select w-full" onChange={handleCategory}>
                                <option value={0}>Select</option>
                            { categories.map((category: Category) =>  (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                            </select>
                       </div>
                       <div>
                            <label className="block mb-3 text-nowrap">Sub-category</label>
                            <select className="primary-select w-full">
                            <option value={0}>Select</option>
                            {sub_categories.map((sub_category: SubCategory) => (
                                 <option key={sub_category.id} value={sub_category.id}>{sub_category.name}</option>
                            ))}
                            </select>
                       </div>
                    </div>
                    <label className="block mt-4">Tags</label>
                    <Input type="text" name="tags" variant="primary-input" placeholder="" />
                </div>
            </div>
  )
}

export default ProductCategory
