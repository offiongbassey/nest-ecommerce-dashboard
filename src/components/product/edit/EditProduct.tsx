"use client";

import Button from "@/components/Button";
import Select, { MultiValue } from "react-select";
import ProductCategory from "../product-utils/ProductCategory";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { getColors, getProduct, getSizes, updateProduct } from "@/redux/features/product/productSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProductSchemaType, productSchema } from "@/validations/productSchema";
import { useRouter } from "next/navigation";
import LoaderModal from "@/components/modal/LoaderModal";

type ProductIdType = {
    productId: number;
}

const EditProduct = ({productId}: ProductIdType) => {
    const dispatch = useDispatch<AppDispatch>();
    const { token } = useAppSelector((state) => state.user.user);
    const { product, colors, sizes } = useAppSelector((state) => state.product);
    const [newProduct, setNewProduct] = useState(product);
    const [ selectedColors, setSelectedColors ] = useState<number[]>([]);
    const [ selectedSizes, setSelectedSizes ] = useState<number[]>([]);
    const [images, setImages] = useState<File[]>([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if(productId && Object.keys(product).length === 0){
            dispatch(getProduct({token, productId}));
            dispatch(getColors());
            dispatch(getSizes());
        }else{
            setNewProduct(product);
            console.log("In ", newProduct)
        }
        
    }, [product]);

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files){
            const _files = Array.from(e.target.files || []);
            setImages(_files);
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        // console.log("name1 ", name, "val1 ", value);
        setNewProduct({...newProduct, [name]: value})
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver<ProductSchemaType>(productSchema)
    });

    const onSubmit = async (data: ProductSchemaType) => {
        setLoading(true);
        const productId = newProduct.id;
        const response = await dispatch(updateProduct({ data, selectedColors, selectedSizes, images, token, productId }));
        setLoading(false);
        if(response.payload.success){
            router.push("/dashboard/product");
        }
    }
    

  return (
    <div className="padding-container pt-32 text-green-30 w-full">
        {loading && <LoaderModal />}
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div>
                    <h2 className="text-2xl font-[600]">Edit Product</h2>
                </div>
                <div className="flex gap-2 items-center">
                    <Button type="submit" variant="btn_green">Save</Button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="bg-white rounded-2xl border border-gray-20 my-6 w-full">
                    <div className="p-6">
                        <h4 className="text-xl font-[600]">Basic</h4>
                    </div>
                    <hr/>
                    <div className="p-6">
                        <label htmlFor="title" className="block mb-2">Product Title</label>
                        <input 
                            type="text"
                            placeholder="Type here"
                            {...register("name")}
                            className="primary-input w-full"
                            value={ newProduct.name}
                            onChange={(e) => handleInputChange(e)}
                        />
                        <span className="text-red-400">{errors.name?.message}</span>

                        <label htmlFor="description" className="block mt-6 mb-2">Full Description</label>
                        <textarea
                        {...register("description")}
                        value={newProduct.description}
                        onChange={handleInputChange}
                        rows={5} className="bg-gray-90 focus:outline-none rounded-md w-full mb-2 p-2"></textarea>
                        <span className="text-red-400">{errors.description?.message}</span>
                        
                        <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 items-center justify-between mt-3">
                            <div className="w-full md:flex-1">
                                <label htmlFor="regular_price" className="block mb-2">Regular Price</label>
                                <input 
                                    {...register("regular_price")}
                                    type="number"
                                    className="primary-input w-full"
                                    placeholder="$"
                                    value={newProduct.regular_price}
                                    onChange={(e) => handleInputChange(e)}
                                />
                                <span className="text-red-400">{errors.regular_price?.message}</span>
                            </div>
                            <div className="w-full md:flex-1">
                                <label htmlFor="promo_price" className="block mb-2">Promotional Price</label>
                                <input 
                                   {...register("promo_price")}
                                    value={newProduct.promo_price}
                                    onChange={(e) => handleInputChange(e)}
                                    type="number"
                                    className="primary-input w-full"
                                    placeholder="$"
                                />
                                <span className="text-red-400">{errors.promo_price?.message}</span>
                            </div>
                            <div className="w-full md:flex-1">
                                <label htmlFor="currency" className="block mb-2">Currency</label>
                                <select className="primary-select w-full" {...register("currency")}>
                                    <option value={newProduct.currency}>{newProduct.currency === "$" ? "USD" : "₦"}</option>
                                    {newProduct.currency === "$" ? (
                                        <option value={"₦"}>Naira</option>
                                    ) : (
                                        <option value={"$"}>USD</option>
                                    ) }
                                </select>
                                <span className="text-red-400">{errors.currency?.message}</span>
                            </div>
                            <div className="w-full md:flex-1">
                                <label htmlFor="tax" className="block mb-2">Tax Rate</label>
                                <input 
                                    {...register("tax_rate")}
                                    value={newProduct.tax_rate}
                                    onChange={(e) => handleInputChange(e)}
                                    type="number"
                                    className="primary-input w-full"
                                    placeholder="%"
                                />
                                <span className="text-red-400">{errors.tax_rate?.message}</span>
                            </div>
                            <div className="w-full md:flex-1">
                                <label htmlFor="sizes" className="block mb-2">Sizes</label>
                                <Select 
                                    options={sizes}
                                    isMulti
                                    closeMenuOnSelect={false}
                                    hideSelectedOptions={false}
                                    onChange={(newValue: MultiValue<any>) => {
                                        const selectedValue = newValue.map((option) => option.value);
                                        setSelectedSizes(selectedValue);
                                    }}
                                />
                            </div>
                            <div className="w-full md:flex-1">
                                <label htmlFor="colors" className="block mb-2">Colors</label>
                                <Select 
                                options={colors}
                                isMulti
                                closeMenuOnSelect={false}
                                hideSelectedOptions={false}
                                onChange={(newValue: MultiValue<any>) => {
                                    const selectedValue = newValue.map((option) => option.value);
                                    setSelectedColors(selectedValue);
                                }}
                                />
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="p-6 flex flex-col md:flex-row justify-between md:items-center gap-4">
                        <div>
                            <p className="text-sm mb-2">Existing Sizes:</p>
                            <div className="flex gap-2">
                                {newProduct.product_sizes && newProduct.product_sizes.map((size: { _size: { size: string }}) => (<span className="border border-gray-10 rounded-lg py-1 px-1 text-sm"> {size._size.size}</span>)) }
                            </div>
                        </div>
                        <div>
                            <p className="text-sm mb-2">Existing Colors:</p>
                            <div className="grid grid-cols-4 md:flex gap-2">
                                {newProduct.product_colors && newProduct.product_colors.map((color: { _color: { color: string, code: string }}) => (<span className={`border border-gray-10 rounded-lg py-1 px-1 text-sm`}> {color._color.color}</span>)) }
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-white rounded-2xl border border-gray-20 my-6">
                        <div className="p-6">
                            <h4 className="text-xl font-[600]">Media</h4>
                        </div>
                        <hr/>
                        <div className="p-6">
                            <p className="text-center py-10">Media Image</p>
                            <input name="file" type="file" className="primary-input max-w-56 md:max-w-[100%]"
                            multiple onChange={(e) => handleImage(e)} />
                        </div>
                        <div className="p-6 grid grid-cols-3 md:grid-cols-4 gap-2">
                            {newProduct.product_images?.map((img: { id: number, image_url: string}) => ( 
                            <div key={img.id} style={{backgroundImage: `url("${img.image_url}")`}} className='bg-center bg-cover bg-no-repeat p-8 h-20 rounded-full border-2 border-green-50' />
                            ))}
                        </div>
                    </div>
                    <ProductCategory register={register} errors={errors} quantity={newProduct.quantity} category={newProduct.category} sub_category={newProduct.sub_category} handleInputChange={handleInputChange} />
                </div>
            </div>
        </form>
    </div>
  )
}

export default EditProduct
