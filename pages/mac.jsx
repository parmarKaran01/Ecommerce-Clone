import axios from "axios"
import ProductCard from "../components/ProductCard"
import { useSelector, useDispatch } from "react-redux"
import { filter, productState } from "../reduxToolkit/productSlice";
import { useEffect } from "react";

export default function Mac({ data }){
    // console.log(data);
    // const dispatch = useDispatch();
    // const data = useSelector(productState);
    // useEffect(()=>{
    //     const category = "laptop"
    //     dispatch(filter(category))
    // }, []) 
    return(
        <div className="w-full h-full grid grid-cols-1 gap-5 px-12 mt-10 place-items-center md:grid-cols-2 lg:grid-cols-3 ">
            {data.map((item) => {
                return <ProductCard item={item} key={item.id}/>
            })}
        </div>
    )
}


export async function getServerSideProps(){
    const res = await fetch("https://api.pujakaitem.com/api/products")
    const data = await res.json()
    const laptops = data.filter((val) => {
        return val.category === "laptop"
    })
    return{
        props:{
            data: laptops
        }
    }
}