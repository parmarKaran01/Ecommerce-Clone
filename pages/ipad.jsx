import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "../components/ProductCard";

export default function ipad({ data }) {
  return (
    <>
      <div>This is the laptop page</div>
      <div className="w-full h-full grid grid-cols-1 gap-5 px-12 mt-10 place-items-center md:grid-cols-2 lg:grid-cols-3 ">
      {Object.entries(data.items).map(([key, value]) => value).map((item) => {
          return <ProductCard item={item} key={item.id} />;
        })}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://www.apple.com/us/shop/mcm/product-price?parts=IPAD2022_WIFI,IPADPRO_11_2022,IPADAIR2022_WIFI,IPAD2021_MAIN,IPADMINI2021_MAIN"
  );
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}
