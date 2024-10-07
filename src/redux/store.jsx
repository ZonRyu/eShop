import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import categorySlice from "./categorySlice";

const store = configureStore({
    reducer: {
        products: productSlice,
        categories: categorySlice,
        cart: cartSlice
    }
})

export default store