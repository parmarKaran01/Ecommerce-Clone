import { useSelector, useDispatch } from "react-redux"
import CartProductCard from "../components/cartProductCard"
import ProductCard from "../components/ProductCard"
import { cartState } from "../reduxToolkit/cartSlice"
export default function cart(){
    const dispatch = useDispatch()
    const products = useSelector(cartState)
    if(products.length === 0) return <h2>No Products in the cart :(</h2>
    return(
        <div>
            {products.map((product) => {
                return(
                    <CartProductCard item={product} key={product.id}/>
                    // <ProductCard item={product}/>
                )
            })}
        </div>
    )
}