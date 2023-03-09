import { Button, List, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartProductCard from "../components/cartProductCard";
import ProductCard from "../components/ProductCard";
import { cartState } from "../reduxToolkit/cartSlice";
export default function cart() {
  const products = useSelector(cartState);
  const [totalSum, setTotalSum] = useState(0);
  useEffect(() => {
    calculateTotalSum(products);
  }, [products]);

  const calculateTotalSum = (products) => {
    let sum = 0;
    if (products.length > 0) {
      products.map((item) => {
        sum += parseInt(item?.price?.value);
      });
    }
    setTotalSum(sum);
  };
  
  if (products.length === 0) return <h2>No Products in the cart :(</h2>;
  return (
    <>
      <List
        sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}
      >
        {products.map((product) => {
          return (
            <CartProductCard item={product} key={product.id} />
            // <ProductCard item={product}/>
          );
        })}
      </List>
      <div className="w-full flex flex-row items-center justify-end gap-2">
        <Paper variant="elevation" style={{
            paddingLeft:'1rem',
            paddingRight:'1rem',
            paddingTop:'0.5rem',
            paddingBottom:'0.5rem',

        }}>{`$ ${totalSum}`} </Paper>
        <Button variant="outlined">
            Checkout
        </Button>
      </div>
    </>
  );
}
