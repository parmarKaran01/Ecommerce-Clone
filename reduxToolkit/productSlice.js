import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES = Object.freeze({
    IDLE:"idle",
    ERROR:"error",
    LOADING: "loading"
})

const productSlice = createSlice({
    name:"product",
    initialState: {
        data:[{id:1, title:"first product"}],
        status:  STATUSES.IDLE,
    },
    reducers:{
        filter(state, action){
            return state.filter(item => item.category === action.payload)
        }

    },
    extraReducers:(builder) =>{
        builder
        .addCase(fetchProducts.pending, (state, action) => {
            state.status = STATUSES.LOADING
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = STATUSES.IDLE
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.status = STATUSES.ERROR
        })
    }
})


export const fetchProducts = createAsyncThunk("products/fetch", async () =>{
    const res = await fetch("https://api.pujakaitem.com/api/products")
    const data = await res.json()
    // console.log(data);
    return data
})

export const {filter} = productSlice.actions
export const productState = (state) => state.product
export default productSlice.reducer