"use client";

import { useForm } from "react-hook-form";
import Button from "../Button";
import ProductCategory from "./product-utils/ProductCategory";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema, ProductSchemaType } from "@/validations/productSchema";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";
import {
  createProduct,
  getColors,
  getSizes,
} from "@/redux/features/product/productSlice";
import LoaderModal from "../modal/LoaderModal";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Select, { MultiValue } from "react-select";

interface Size {
  id: number;
  size: string;
}

interface Color {
  id: number;
  color: string;
  code: string;
}

const AddProduct = () => {
  const { sizes, colors } = useAppSelector((state) => state.product);
  const { token } = useAppSelector((state) => state.user.user);
  const dispatch = useDispatch<AppDispatch>();
  const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedColors, setSelectedColors] = useState<number[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== undefined) {
      dispatch(getSizes());
      dispatch(getColors());
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver<ProductSchemaType>(productSchema),
  });
  const onSubmit = async (data: ProductSchemaType) => {
    if (images.length > 0) {
      setLoading(true);
      const response = await dispatch(
        createProduct({ data, selectedColors, selectedSizes, images, token })
      );
      setLoading(false);
      if (response.payload.success) {
        router.push("/dashboard/product");
      }
    } else {
      toast.error("Upload an image");
    }
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const _files = Array.from(e.target.files || []);
      setImages(_files);
    }
  };

  return (
    <div className="padding-container pt-32 text-green-30 w-full">
      {loading && <LoaderModal />}
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div>
            <h2 className="text-2xl font-[600]">Add New Product</h2>
          </div>
          <div className="flex gap-2 items-center">
            <Button type="button" variant="btn_green_outline">
              Save to draft
            </Button>
            <Button type="submit" variant="btn_green">
              Publish
            </Button>
          </div>
        </div>
        {/* <ProductForm register={register} errors={errors} sizes={sizes} colors={colors} handleImage={handleImage} setSelectedColors={setSelectedColors} setSelectedSizes={setSelectedSizes}/> */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-white rounded-2xl border border-gray-20 my-6 w-full">
            <div className="p-6">
              <h4 className="text-xl font-[600]">Basic</h4>
            </div>
            <hr />
            <div className="p-6">
              <label htmlFor="title" className="block mb-2">
                Product title
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="primary-input w-full"
                {...register("name")}
              />
              <span className="text-red-400">{errors.name?.message}</span>

              <label htmlFor="description" className="block mt-6 mb-2">
                Full description
              </label>
              <textarea
                rows={5}
                className="bg-gray-90 focus:outline-none rounded-md w-full mb-2 p-2"
                {...register("description")}
              ></textarea>
              <span className="text-red-400">
                {errors.description?.message}
              </span>

              <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-between mt-3">
                <div className="w-full md:flex-1">
                  <label htmlFor="regular_price" className="block mb-2">
                    Regular Price
                  </label>
                  <input
                    type="number"
                    className="primary-input w-full"
                    placeholder="$"
                    {...register("regular_price")}
                  />
                  <span className="text-red-400">
                    {errors.regular_price?.message}
                  </span>
                </div>
                <div className="w-full md:flex-1">
                  <label htmlFor="promo_price" className="block mb-2">
                    Promotional Price
                  </label>
                  <input
                    type="number"
                    className="primary-input w-full"
                    placeholder="$"
                    {...register("promo_price")}
                  />
                  <span className="text-red-400">
                    {errors.promo_price?.message}
                  </span>
                </div>
                <div className="w-full md:flex-1">
                  <label htmlFor="currency" className="block mb-2">
                    Currency
                  </label>
                  <select
                    className="primary-select w-full"
                    {...register("currency")}
                  >
                    <option value={""}>Select</option>
                    <option value={"$"}>USD</option>
                    <option value={"₦"}>Naira</option>
                  </select>
                  <span className="text-red-400">
                    {errors.currency?.message}
                  </span>
                </div>
                <div className="w-full md:flex-1">
                  <label htmlFor="tax" className="block mb-2">
                    Tax Rate
                  </label>
                  <input
                    type="number"
                    className="primary-input w-full"
                    placeholder="%"
                    {...register("tax_rate")}
                  />
                  <span className="text-red-400">
                    {errors.tax_rate?.message}
                  </span>
                </div>
                <div className="w-full md:flex-1">
                  <label htmlFor="sizes" className="block mb-2">
                    Size
                  </label>
                  <Select
                    options={sizes}
                    isMulti
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    onChange={(newValue: MultiValue<any>) => {
                      const selectedValue = newValue.map(
                        (option) => option.value
                      );
                      setSelectedSizes(selectedValue);
                    }}
                  />
                </div>
                <div className="w-full md:flex-1">
                  <label htmlFor="colors" className="block mb-2">
                    Colors
                  </label>
                  <Select
                    options={colors}
                    isMulti
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    onChange={(newValue: MultiValue<any>) => {
                      const selectedValue = newValue.map(
                        (option) => option.value
                      );
                      setSelectedColors(selectedValue);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-2xl border border-gray-20 my-6">
              <div className="p-6">
                <h4 className="text-xl font-[600]">Media</h4>
              </div>
              <hr />
              <div className="p-6">
                <p className="text-center py-10">Media Image</p>
                <input
                  name="file"
                  type="file"
                  className="primary-input"
                  multiple
                  onChange={(e) => handleImage(e)}
                />
              </div>
            </div>
            <ProductCategory register={register} errors={errors} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
