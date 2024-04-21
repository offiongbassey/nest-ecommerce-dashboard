import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export type ProductInitialStateAttributes = {
    product: ProductDetails;
    products: [];
    error: unknown;
    status: string,
    totalStoreValue: number;
    outOfStock: number;
    categories: [];
    sub_categories: [];
    sizes: [];
    colors: [];
}

const initialState = {
    product: {},
    products: [],
    error: "",
    status: "",
    totalStoreValue: 0,
    outOfStock: 0,
    categories: [],
    sub_categories: [],
    sizes: [],
    colors: []
} as ProductInitialStateAttributes;

type ProductDetails = {
    category_id: number;
    sub_category_id: number;
    createdAt: string;
    currency: string;
    description: string;
    id: number;
    name: string;
    product_code: string;
    promo_price: number;
    regular_price: number;
    slug: string;
    status: string;
    tax_rate: string;
    product_colors: [];
    product_images: [];
    quantity: number;
    quantity_sold: number;
    product_sizes: [];
    category: { id: number, name: string },
    sub_category: { id: number, name: string }
}

type ProductAttribute = {
    data: ProductValueAttribute;
    selectedColors: number[];
    selectedSizes: number[];
    images: File[];
    token: string;
    productId?: number;
}
type ProductValueAttribute = {
    name: string;
    category_id: number;
    description: string;
    regular_price: number;
    promo_price: number;
    currency: string;
    tax_rate: number;
    sub_category_id: number;
    quantity: number;
}

type Color = {
    id: number;
    color: string;
}

type Size = {
    id: number;
    size: string;
}
const END_POINT = `${process.env.NEXT_PUBLIC_API_ENDPOINT}`;
const PRODUCT_ENDPOINT = `${END_POINT}/product`;
const CATEGORY_ENDPOINT = `${END_POINT}/category`;
const SUB_CATEGORY_ENDPOINT = `${END_POINT}/sub-category`;

export const getCategories = createAsyncThunk("product/category", async (_, thunkAPI) => {
    try {
        const response = await axios.get(CATEGORY_ENDPOINT);
        return response.data;
    } catch (error: any) {
        const error_message = error.response.data.message;
        if(typeof(error_message) === "string"){
            toast.error(error_message);
        }else if(Array.isArray(error_message)){
            error_message.forEach((err) => {
                toast.error(err);
            })
        }else{
            toast.error("An unexpected error occured");
        }
        return thunkAPI.rejectWithValue(error_message);
    }
});

export const getSubCategories = createAsyncThunk("product/sub-category", async(category: number, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${SUB_CATEGORY_ENDPOINT}/${category}`);
        return response.data;
    } catch (error: any) {
        const error_message = error.response.data.message;
        if(typeof(error_message) === "string"){
            toast.error(error_message);
        }else if(Array.isArray(error_message)){
            error_message.forEach((err) => {
                toast.error(err);
            });
        }else{
            toast.error("An unexpected error occured");
        }
        return rejectWithValue(error_message);
    }
});

export const getSizes = createAsyncThunk("product/size", async(_, thunkApi) =>{
    try {
        const response = await axios.get(`${END_POINT}/size`);
        if(response.data.data.length > 0){
            let tempArray: any | [] = [];
            response.data.data.forEach((size: Size) => {
                let temp = {
                    value: size.id,
                    label: size.size
                }
                tempArray.push(temp);
            })
            return tempArray;
        }else{
            return response.data.data;
        }
        
    } catch (error: any) {
        const error_message = error.response.data.message;
        if(typeof(error_message) === "string"){
            toast.error(error_message);
        }else if(Array.isArray(error_message)){
            error_message.forEach((err) => {
                toast.error(err.msg);
            });
        }else{
            toast.error("An unexpected error occured");
        }
        return thunkApi.rejectWithValue(error_message);
    }
});

export const getColors = createAsyncThunk("product/color", async(_, thunkApi) => {
    try {
        const response = await axios.get(`${END_POINT}/color`);
        if(response.data.data.length > 0){    
            let tempArray: any | [] = [];
            response.data.data.forEach((color: Color) => {
                let temp = {
                    value: color.id,
                    label:color.color
                }
                tempArray.push(temp);
            })
            return tempArray;
        }else{
            return response.data.data
        }  
    } catch (error: any) {
        const error_message = error.response.data.message;
        if(typeof(error_message) === "string"){
            toast.error(error_message);
        }else if (Array.isArray(error_message)){
            error_message.forEach((err) => {
                toast.error(err.msg);
            })
        }else{
            toast.error("An unexpected error occured");
        }
        return thunkApi.rejectWithValue(error_message);
    }
});

export const createProduct = createAsyncThunk("product/create", async(values: ProductAttribute, { rejectWithValue }) => {
    try {
        const { data, selectedColors, selectedSizes, images, token } = values;
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('category_id', data.category_id.toString());
        formData.append('description', data.description);
        formData.append('regular_price', data.regular_price.toString());
        formData.append('promo_price', data.promo_price.toString());
        formData.append('currency', data.currency);
        formData.append('tax_rate', data.tax_rate.toString());
        formData.append('sizes', selectedSizes.toString());
        formData.append('colors', selectedColors.toString());
        formData.append('sub_category_id', data.sub_category_id.toString());
        formData.append('quantity', data.quantity.toString());
        images.forEach((image, index) => {
            formData.append(`files`, image);
        })
        const response = await axios.post(`${PRODUCT_ENDPOINT}/create`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                token
            }
        });
        toast.success(response.data.message);
        return response.data
    } catch (error: any) {
        const error_message = error.response.data.message;
        if(typeof(error_message) === "string"){
            toast.error(error_message);
        }else if (Array.isArray(error_message)){
            error_message.forEach((err) => {
                toast.error(err.msg);
            })
        }else{
            toast.error("An unexpected error occured");
        }
        return rejectWithValue(error_message);
    }
});

export const getProducts = createAsyncThunk("product/get-all", async(token: string, thunkApi) => {
    try {
        const response = await axios.get(`${PRODUCT_ENDPOINT}/vendor`, {
            headers: {
                token
            }
        });
        return response.data;
    } catch (error: any) {
        const error_message = error.response.data.message;
        if(typeof(error_message) === "string"){
            toast.error(error_message);
        }else if(Array.isArray(error_message)){
            error_message.forEach((err) => {
                toast.error(err.msg);
            })
        }else {
            toast.error("An unexpected error occured");
        }
        return thunkApi.rejectWithValue(error_message);
    }
});

export const getProduct = createAsyncThunk("product/get-one", async(values: { token: string, productId: number}, thunkAPI) => {
    try {
        const { token, productId } = values;
        const response = await axios.get(`${PRODUCT_ENDPOINT}/vendor/${productId}`, {
            headers: {
                token
            }
        });
        
        return response.data;
    } catch (error: any) {
        const error_message = error.response.data.message;
        if(typeof(error_message) === "string"){
            toast.error(error_message);
        }else if(Array.isArray(error_message)){
            error_message.forEach((err) => {
                toast.error(err.msg);
            });
        }else{
            toast.error("An unexpected error occured");
        }
        return thunkAPI.rejectWithValue(error_message);
    }
});

export const updateProduct = createAsyncThunk("product/update", async(values: ProductAttribute, { rejectWithValue }) => {
    try {
        const { data, selectedColors, selectedSizes, images, token, productId } = values;
        console.log("Values", values)
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("category_id", data.category_id.toString());
        formData.append("description", data.description);
        formData.append("regular_price", data.regular_price.toString());
        formData.append("promo_price", data.promo_price.toString());
        formData.append("currency", data.currency);
        formData.append("tax_rate", data.tax_rate.toString());
        formData.append("sizes", selectedSizes.toString());
        formData.append("colors", selectedColors.toString());
        formData.append("sub_category_id", data.sub_category_id.toString());
        formData.append("quantity", data.quantity.toString());
        if(images.length > 0){
            images.forEach((image, index)=> {
                formData.append("files", image);
            })
        }
        const response = await axios.put(`${PRODUCT_ENDPOINT}/update/${productId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                token
            }
        });

        console.log("Done ", response.data);
        toast.success(response.data.message);
        return response.data;
    } catch (error: any) {
        const error_message = error.response.data.message;
        if(typeof(error_message) === "string"){
            toast.error(error_message);
        }else if(Array.isArray(error_message)){
            error_message.forEach((err) => {
                toast.error(err.msg);
            })
        }else {
            toast.error("An unexpected error occured");
        }

        return rejectWithValue(error_message)
    }
})

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
        .addCase(getCategories.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(getCategories.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.categories = action.payload.data;
        })
        .addCase(getCategories.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        })
        .addCase(getSubCategories.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(getSubCategories.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.sub_categories = action.payload.data;
        })
        .addCase(getSubCategories.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        })
        .addCase(getSizes.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(getSizes.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.sizes = action.payload
            // console.log("Log ", action.payload);
        })
        .addCase(getSizes.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        })
        .addCase(getColors.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(getColors.fulfilled, (state, action) => {
            state.status = "fullfiled",
            state.colors = action.payload;
        })
        .addCase(getColors.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        })
        .addCase(createProduct.pending, (state, action) => {
            state.status = "pending";
        })
        .addCase(createProduct.fulfilled, (state, action) => {
            state.status = "succeeded";
            // state.products = action.payload.data;
        })
        .addCase(createProduct.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        })
        .addCase(getProducts.pending, (state, action) => {
            state.status = "loading"
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.products = action.payload.data.data;
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        })
        .addCase(getProduct.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(getProduct.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.product = action.payload.data
        })
        .addCase(getProduct.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        })
        .addCase(updateProduct.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(updateProduct.fulfilled, (state, action) => {
            state.status = "succeeded";
        })
        .addCase(updateProduct.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        })

    },
})

export default productSlice.reducer