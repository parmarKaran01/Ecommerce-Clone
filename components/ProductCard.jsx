import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../reduxToolkit/cartSlice";

export default function ProductCard({ item }) {
  const dispatch = useDispatch()
  return (
    <section className="w-3/4 h-[450px] bg-[#AAAAAA] flex flex-col items-center justify-between rounded-xl shadow-[#AAAAAA]">
      <div className="w-full h-[50px] flex flex-row justify-between items-center ">
        <h2 className="text-3xl font-semibold ml-4 mt-10">{item.name}</h2>
      </div>
      <div className="relative w-full h-[250px] rounded-xl object-contain">
        <Image src={item.image} alt="image" fill />
      </div>
      <div className="w-full h-[50px] flex flex-row justify-between items-center mb-10">
        <h2 className="text-xl font-semibold ml-4">{item.price}</h2>
        <button className="w-[125px] h-10 mr-4 bg-blue-300 rounded-lg hover:bg-white"
        onClick={()=> {
          dispatch(addToCart(item))
        }}
        >
        Add to cart
      </button>
      </div>
      
    </section>
  );
}

// box-shadow:  0px 5px 15px;
