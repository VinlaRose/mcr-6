import { NavBar } from "../../components/navigation/nav";
import { Sidenav } from "../../components/side-nav/sidenav";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "../../components/product card/product";
import "./home.css";
import { useCart } from "../../context/cart-context";
export const Home = () => {

    const [products,setProducts] = useState([]);
    const {cart} = useCart();
    useEffect(() => {
        //IIFE
        (async()=>{
            try{
                const {data: {books}} = await axios.get("data.json");
                setProducts(books);
            }
            catch(error){
                console.log(error);
            }
        })()

        
    },[])
    // console.log(products);

    return(
        <Fragment>
            <NavBar/>
            
            <main>
            <div className='rowC'>
            <Sidenav/>
            <div className="main d-flex gap wrap">
            {
                
                products.map(product => <ProductCard key={product.id} product={product}/>)

            }
            </div>
            </div>
            </main>

            

        </Fragment>
        
    )
}