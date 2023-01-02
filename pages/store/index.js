import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { productState } from "../../reduxToolkit/productSlice"
import Image from "next/image"
import { fetchProducts } from "../../reduxToolkit/productSlice"
import ProductCard from "../../components/ProductCard"
export default function store(){
    const dispatch = useDispatch()
    const {data, status} = useSelector(productState)
    useEffect(()=>{
        dispatch(fetchProducts())
      } ,[])
    console.log(data);
    return(
        <div className="w-full h-full grid grid-cols-1 gap-5 px-12 mt-10 place-items-center md:grid-cols-2 lg:grid-cols-3 ">
            {data.map((item)=>{
                return(
                    <ProductCard item={item}/>
                )
            })}
        </div>
    )
}