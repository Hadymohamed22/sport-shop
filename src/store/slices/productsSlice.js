import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("productSlice/fetchProducts", async () => {
    try {
        const res = await fetch("/products.json");
        if (!res.ok) {
            throw new Error('Failed to fetch products');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        throw error;
    }
});

const productSlice = createSlice({
    name: "productSlice",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return [...action.payload]
        })
    }
})

export default productSlice.reducer