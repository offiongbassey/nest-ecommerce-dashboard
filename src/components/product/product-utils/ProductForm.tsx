// import Select, { MultiValue } from "react-select";
// import ProductCategory from "./ProductCategory";
// import { Dispatch } from "redux";
// import { SetStateAction } from "react";

// type Props = {
//     register: any;
//     errors: any;
//     sizes: [];
//     colors: [];
//     handleImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
//     setSelectedColors: Dispatch<SetStateAction<number[]>>
//     setSelectedSizes: Dispatch<SetStateAction<number[]>>
// }

// interface Size {
//     id: number;
//     size: string;
// }

// interface Color {
//     id: number;
//     color: string;
//     code: string;
// }

// const ProductForm = ({ register, errors, sizes, colors, handleImage, setSelectedColors, setSelectedSizes }: Props) => {
//   return (
//     <div className="flex flex-col md:flex-row gap-4">
//     <div className="bg-white rounded-2xl border border-gray-20 my-6 w-full">
//       <div className="p-6">
//         <h4 className="text-xl font-[600]">Basic</h4>
//       </div>
//       <hr />
//       <div className="p-6">
//         <label htmlFor="title" className="block mb-2">
//           Product title
//         </label>
//         <input
//           type="text"
//           placeholder="Type here"
//           className="primary-input w-full"
//           {...register("name")}
//         />
//         <span className="text-red-400">{errors.name?.message}</span>

//         <label htmlFor="description" className="block mt-6 mb-2">
//           Full description
//         </label>
//         <textarea
//           rows={5}
//           className="bg-gray-90 focus:outline-none rounded-md w-full mb-2 p-2"
//           {...register("description")}
//         ></textarea>
//         <span className="text-red-400">
//           {errors.description?.message}
//         </span>

//         <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-between mt-3">
//           <div className="w-full md:flex-1">
//             <label htmlFor="regular_price" className="block mb-2">
//               Regular Price
//             </label>
//             <input
//               type="number"
//               className="primary-input w-full"
//               placeholder="$"
//               {...register("regular_price")}
//             />
//             <span className="text-red-400">
//               {errors.regular_price?.message}
//             </span>
//           </div>
//           <div className="w-full md:flex-1">
//             <label htmlFor="promo_price" className="block mb-2">
//               Promotional Price
//             </label>
//             <input
//               type="number"
//               className="primary-input w-full"
//               placeholder="$"
//               {...register("promo_price")}
//             />
//             <span className="text-red-400">
//               {errors.promo_price?.message}
//             </span>
//           </div>
//           <div className="w-full md:flex-1">
//             <label htmlFor="currency" className="block mb-2">
//               Currency
//             </label>
//             <select
//               className="primary-select w-full"
//               {...register("currency")}
//             >
//               <option value={""}>Select</option>
//               <option value={"$"}>USD</option>
//               <option value={"₦"}>Naira</option>
//             </select>
//             <span className="text-red-400">
//               {errors.currency?.message}
//             </span>
//           </div>
//           <div className="w-full md:flex-1">
//             <label htmlFor="tax" className="block mb-2">
//               Tax Rate
//             </label>
//             <input
//               type="number"
//               className="primary-input w-full"
//               placeholder="%"
//               {...register("tax_rate")}
//             />
//             <span className="text-red-400">
//               {errors.tax_rate?.message}
//             </span>
//           </div>
//           <div className="w-full md:flex-1">
//             <label htmlFor="sizes" className="block mb-2">
//               Size
//             </label>
//             <Select
//               options={sizes}
//               isMulti
//               closeMenuOnSelect={false}
//               hideSelectedOptions={false}
//               onChange={(newValue: MultiValue<any>) => {
//                 const selectedValue = newValue.map(
//                   (option) => option.value
//                 );
//                 setSelectedSizes(selectedValue);
//               }}
//             />
//           </div>
//           <div className="w-full md:flex-1">
//             <label htmlFor="colors" className="block mb-2">
//               Colors
//             </label>
//             <Select
//               options={colors}
//               isMulti
//               closeMenuOnSelect={false}
//               hideSelectedOptions={false}
//               onChange={(newValue: MultiValue<any>) => {
//                 const selectedValue = newValue.map(
//                   (option) => option.value
//                 );
//                 setSelectedColors(selectedValue);
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//     <div>
//       <div className="bg-white rounded-2xl border border-gray-20 my-6">
//         <div className="p-6">
//           <h4 className="text-xl font-[600]">Media</h4>
//         </div>
//         <hr />
//         <div className="p-6">
//           <p className="text-center py-10">Media Image</p>
//           <input
//             name="file"
//             type="file"
//             className="primary-input"
//             multiple
//             onChange={handleImage}
//           />
//         </div>
//       </div>
//       <ProductCategory register={register} errors={errors} />
//     </div>
//   </div>
//   )
// }

// export default ProductForm
