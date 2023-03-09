import ProductCard from "../components/ProductCard"
export default function iphone({ data }){
    return(
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
    )
}


export async function getServerSideProps(){
    const res = await fetch("https://www.apple.com/us/shop/mcm/product-price?parts=IPHONE14_MAIN,IPHONE14PRO_MAIN,IPHONESE3_MAIN,IPHONE13_MAIN")
    const data = await res.json()
    return {
        props:{
            data:data
        }
    }
}