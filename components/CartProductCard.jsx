import {
  Avatar,
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../reduxToolkit/cartSlice";
import React from "react";
import { Delete } from "@mui/icons-material";

export default function CartProductCard({ item }) {
  const dispatch = useDispatch();
  return (
    // <Card
    //   style={{
    //     width: "20rem",
    //   }}
    // >
    //   {/* <section className="w-3/4 h-[450px] bg-[#AAAAAA] flex flex-col items-center justify-between rounded-xl shadow-[#AAAAAA]"> */}
    //   <CardContent
    //     style={{
    //       width: "100%",
    //       height: "100%",
    //     }}
    //   >
    //     <div className="w-full h-[50px] flex flex-row justify-start items-center ">
    //       <Typography fontWeight={"bold"}>{item?.name}</Typography>
    //     </div>
    //     <div className="relative w-full h-[250px] rounded-xl object-contain">
    //       {/* <Image src={item.image} alt="image" fill /> */}
    //     </div>
    //     <div className="w-full h-[50px] flex flex-row justify-end items-center mb-10">
    //       <h2 className="text-xl font-semibold ml-4">{`$ ${item?.price?.value}`}</h2>
    //     </div>

    //     <Button
    //       variant="contained"
    //       style={{
    //         backgroundColor: "black",
    //         color: "white",
    //       }}
    //       onClick={() => {
    //         dispatch(removeFromCart(item?.id));
    //       }}
    //     >
    //       Remove from Cart
    //     </Button>
    //   </CardContent>

    //   {/* </section> */}
    // </Card>

    // <section className="w-3/4 h-[450px]  flex flex-row mb-5 items-center justify-between rounded-xl">
    //   <div className="relative w-full h-[250px] rounded-xl object-contain">
    //     {/* <Image src={item.image} alt="image" fill /> */}
    //   </div>
    //   <div className="w-full h-[50px] flex flex-row justify-between items-center ">
    //     <h2 className="text-3xl font-semibold ml-4">{item?.name}</h2>
    //   </div>
    //   <div className="w-full h-[50px] flex flex-row justify-between items-center mb-10">
    //   <h2 className="text-xl font-semibold ml-4">{`$ ${item?.price?.value}`}</h2>
    //     <Button
    //       variant="contained"
    //       style={{
    //         backgroundColor: "black",
    //         color: "white",
    //       }}
    //       onClick={() => {
    //         dispatch(removeFromCart(item?.id));
    //       }}
    //     >
    //       Remove from Cart
    //     </Button>
    //   </div>
    // </section>

    <>
      <ListItem
        alignItems="flex-start"
        style={{
          width: "100%",
        }}
      >
        <ListItemAvatar>
          <Avatar alt={item?.baseName} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={item?.baseName}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {item?.name}
              </Typography>
              <Typography
                sx={{ display: "block" }}
                component="div"
                variant="body2"
                color="text.primary"
              >
                {`$ ${item?.price?.value}`}
              </Typography>
            </React.Fragment>
          }
        />
        <IconButton
          color="primary"
          component="label"
          onClick={() => {
            dispatch(removeFromCart(item?.id));
          }}
        >
          <Delete />
        </IconButton>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}
