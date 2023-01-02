import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "./productSlice";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart(state, action){
            state.push(action.payload)
        },
        removeFromCart(state, action){
            // console.log(action.payload);
            return state.filter(item => item.name !== action.payload)
        }
    },

})


export const { addToCart, removeFromCart } = cartSlice.actions 
export const cartState = (state) => state.cart
export default cartSlice.reducer