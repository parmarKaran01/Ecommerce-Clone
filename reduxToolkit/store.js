import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice"
import cartReducer from "./cartSlice"
import filterReducer from "./filterSlice";

const store = configureStore({
    reducer:{
        product: productReducer,
        cart: cartReducer,
        filter: filterReducer,
    }
})

export default store