import axios from "axios";
import ProductCard from "../components/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { filter, productState } from "../reduxToolkit/productSlice";
import { useEffect, useState } from "react";

export default function Mac({data}) {
  return (
    <>
      <div className="w-full h-full grid grid-cols-1 gap-5 px-12 mt-10 place-items-center md:grid-cols-2 lg:grid-cols-3 ">
        {/* {mainData.map((item) => {
                return <ProductCard item={item} key={item.id}/>
            })}
     */}

        {Object.entries(data?.items).map(([key, value]) => value).map((item) => {
          return <ProductCard item={item} key={item.id} />;
        })}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://www.apple.com/us/shop/mcm/product-price?parts=MBP2023_14,MACMINI_M2,MACBOOKAIR_M1,MACBOOKAIR_M2,MBP2022_13_M2,IMAC_24_MAIN,MACSTUDIO2022_MAIN,MACPRO2019_MAIN"
  );
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}
