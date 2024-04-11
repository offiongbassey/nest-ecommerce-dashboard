import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export type ProductInitialStateAttributes = {
    product: null;
    products: [];
    error: unknown;
    status: string,
    totalStoreValue: number;
    outOfStock: number;
    categories: [];
    sub_categories: []
}

const initialState = {
    product: null,
    products: [],
    error: "",
    status: "",
    totalStoreValue: 0,
    outOfStock: 0,
    categories: [],
    sub_categories: []
} as ProductInitialStateAttributes;

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

    },
})

export default productSlice.reducer