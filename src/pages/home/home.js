import { NavBar } from "../../components/navigation/nav";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "../../components/product card/product";
import "./home.css";
export const Home = () => {

    const [products,setProducts] = useState([]);

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
            <main className="main d-flex gap wrap">
            {
                products.map(product => <ProductCard product={product}/>)

            }
            </main>

        </Fragment>
        
    )
}