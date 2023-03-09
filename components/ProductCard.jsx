import {
  Button,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../reduxToolkit/cartSlice";

export default function ProductCard({ item }) {
  const dispatch = useDispatch();
  const [isAddedtoCart, setIsAddedToCart] = useState(false);
  return (
    <Card
      style={{
        width: "20rem",
      }}
    >
      {/* <section className="w-3/4 h-[450px] bg-[#AAAAAA] flex flex-col items-center justify-between rounded-xl shadow-[#AAAAAA]"> */}
      <CardContent style={{
        width:"100%",
        height:"100%"
      }}>
        <div className="w-full h-[50px] flex flex-row justify-start items-center ">
          <Typography fontWeight={"bold"}>
            {item?.name}
          </Typography>
        </div>
        <div className="relative w-full h-[250px] rounded-xl object-contain">
          {/* <Image src={item.image} alt="image" fill /> */}
        </div>
        <div className="w-full h-[50px] flex flex-row justify-end items-center mb-10">
          <h2 className="text-xl font-semibold ml-4">{`$ ${item?.price?.value}`}</h2>
        </div>

        {isAddedtoCart ? (
          <Button
            variant="contained"
            style={{
              backgroundColor:"black",
              color:"white"
            }}
            
            onClick={() => {
              dispatch(removeFromCart(item?.id));
              setIsAddedToCart(false)
            }}
          >
            Remove from Cart
          </Button>
        ) : (
          <Button
            variant="contained"
            style={{
              backgroundColor:"#0171E2"
            }}
            onClick={() => {
              dispatch(addToCart(item));
              setIsAddedToCart(true)
            }}
          >
            Add to cart
          </Button>
        )}
      </CardContent>

      {/* </section> */}
    </Card>
  );
}

