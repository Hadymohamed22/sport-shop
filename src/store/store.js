import { configureStore } from "@reduxjs/toolkit";
import likesSlice from './slices/likesSlice'
import cartSlice from './slices/cartSlice'
import productSlice from './slices/productsSlice'


export const store = configureStore({
    reducer: {
        likes: likesSlice,
        cart: cartSlice,
        products: productSlice,
    }
})