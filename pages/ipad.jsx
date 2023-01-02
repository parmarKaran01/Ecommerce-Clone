import ProductCard from "../components/ProductCard"

export default function ipad({ data }){
    return(
        <div className="w-full h-full grid grid-cols-1 gap-5 px-12 mt-10 place-items-center md:grid-cols-2 lg:grid-cols-3">
            {data.map((item) => {
                return <ProductCard item={item} key={item.id}/>
            })}
        </div>
    )
}

export async function getServerSideProps(){
    const res = await fetch("https://api.pujakaitem.com/api/products")
    const data = await res.json()
    const ipads = data.filter((item) => {
        return item.category === "watch"
    })
    return {
        props:{
            data:ipads
        }
    }
}