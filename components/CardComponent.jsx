import React from "react";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import iphone from "../Images/Iphone14.jpg";
import { Card, CardContent } from "@mui/material";

function CardComponent({ title, content }) {
  return (
    <Card style={{
      backgroundColor:"#F6F5F8",
      width:"100%",
      height:"100%"
    }}>
      <CardContent>
        <section className="flex w-full h-full flex-col items-center justify-evenly bg-[#F6F5F8]">
          <div className="flex w-full h-fit flex-col justify-center items-center mt-6 text-black">
            <h1 className="text-5xl font-bold">{title}</h1>
            <h4 className="text-2xl mt-2">{content}</h4>
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
          <div className="relative h-[250px] w-[250px]">
            <Image src={iphone} alt="Image of iphone14" fill />
          </div>
        </section>
      </CardContent>
    </Card>
  );
}

export default CardComponent;
