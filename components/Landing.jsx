import React, { useEffect } from "react";
import Image from "next/image";
import iphone from "../Images/Iphone14.jpg";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, productState } from "../reduxToolkit/productSlice";
import CardComponent from "./CardComponent";

function Landing() {
  const {data, status} = useSelector(productState)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchProducts())
  } ,[])
  // console.log(data);
  return (
    <>
    <section className="flex w-full h-screen flex-col items-center justify-evenly bg-[#F6F5F8]">
      <div className="flex w-full h-fit flex-col justify-center items-center mt-6 text-black">
        <h1 className="text-5xl font-bold">iPhone 14</h1>
        <h4 className="text-2xl mt-2">Big and Better.</h4>
        <div className="flex flex-row w-[15rem] justify-around items-center mt-3">
          <span className="flex flex-row items-center justify-center mt-2 text-xl text-sky-500 w-fit h-fit hover:underline cursor-pointer">
            <span>Learn More</span>
            <ChevronRightIcon className="w-5 h-5 " />
          </span>
          <span className="flex flex-row items-center justify-center mt-2 text-xl text-sky-500 w-fit h-fit hover:underline cursor-pointer">
            <span>Buy</span>
            <ChevronRightIcon className="w-5 h-5 " />
          </span>
        </div>
      </div>
      <div className=" h-1/2 w-1/2">
        <Image
          src={iphone}
          alt="Image of iphone14"
          className="h-full w-full object-contain"
        />
      </div>
    </section>

    <section className="h-full text-white grid grid-cols-2 grid-rows-2 place-items-center gap-10 m-5">
      <CardComponent title="iPhone 14 Pro" content="Pro. Beyond."/>
      <CardComponent title="iPad" content="Lovable. Drawable. Magical."/>
      <CardComponent title="Airpods" content="Share the joy."/>
      <CardComponent title="MacBook Air" content="Dont take it lightly."/>
    </section>
    </>
  );
}

export default Landing;
