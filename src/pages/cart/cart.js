import { Fragment } from "react";
import { NavBar } from "../../components/navigation/nav";
import { HorizontalCard } from "../../components/horizontal card/horizontal";
import { useCart } from "../../context/cart-context";
import "./cart.css";

export const Cart = () => {

    const { cart } = useCart();
    console.log(cart)

    return (
        <Fragment>
            <NavBar/>
            <main className="main">
            {
                cart && cart.length > 0 ? <h2>Your Cart: ({cart.length}) items</h2> : <h2>Your Cart is Empty</h2>
            }
            <div className="main-cart d-flex direction-column gap">
                {
                    cart && cart.length > 0 ? cart.map(product => <HorizontalCard key={product.id} product={product} />) : ""
                }
            </div>
            </main>
            
        </Fragment>
        
    )
}