import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../reduxToolkit/cartSlice";
export default function CartProductCard({ item }) {
  const dispatch = useDispatch()
  const handleRemove = (name) =>{
    // console.log(name);
    dispatch(removeFromCart(name))
  }
  return (
    <section className="w-3/4 h-[450px]  flex flex-row mb-5 items-center justify-between rounded-xl">
      <div className="relative w-full h-[250px] rounded-xl object-contain">
        <Image src={item.image} alt="image" fill />
      </div>
      <div className="w-full h-[50px] flex flex-row justify-between items-center ">
        <h2 className="text-3xl font-semibold ml-4">{item.name}</h2>
      </div>
      <div className="w-full h-[50px] flex flex-row justify-between items-center mb-10">
        <h2 className="text-xl font-semibold ml-4">{item.price}</h2>
        <button className="w-[125px] h-10 mr-4 bg-blue-300 rounded-lg "
        onClick={()=>{
          handleRemove(item.name)
        }}
        >
        Remove
      </button>
      </div>
      
    </section>
  );
}
