import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { productState } from "./productSlice";


const filterSlice = createSlice({
    name:"filter",
    initialState: ["apple", "samsung", "nokia"],
    reducers:{
        search(state, action){
            console.log(action.payload);
            let newArray = []
            newArray = state.filter((item) => {
                item.toLowerCase().includes(action.payload.toLowerCase())
            })

            return newArray
        }
    },
})

export const {search} = filterSlice.actions
export const searchProductState = (state) => state.filter
export default filterSlice.reducer