import "./bill.css";
import { useCart } from "../../context/cart-context"
import React from 'react'
// import GooglePayButton from "@google-pay/button-react";
// import { PayPalButtons } from '@paypal/react-paypal-js';
// import { PayPalScriptProvider } from '@paypal/react-paypal-js';
// import { useEffect } from 'react';
// import CartAdditonalFeatures from './CartAdditonalFeatures';
// import CartPageFaq from './CartPageFaq';
// import Features2 from './Features2';
// import { useSelector } from 'react-redux';





export const BillCard = ({product}) => {

    // const { id, name, image, oldPrice, newPrice,  discount, quantity } = product;

    //  const { cartDispatch } = useCart();

    return(
        <div class="gapping">
        <div class="card card-vertical d-flex direction-column relative shadow">
            Total : <p> 10 </p>
        </div>
        </div>
    )
    
}


    