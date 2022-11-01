import "./product.css";
import { useCart } from "../../context/cart-context";
import { getProductById } from "../../utility/findProductInCart";
import { useNavigate } from "react-router-dom";
export const ProductCard = ({product}) => {

     const {id, name, image,newPrice, oldPrice, discount, rating} = product;
     
     const {cart, cartDispatch} = useCart();

     const isProductInCart = getProductById(cart, id);

     
     const handleAddToCartClick = () => {
          cartDispatch({
              type: "ADD_TO_CART",
              payload: product
          })
          // navigate("/cart");
      }

     const navigate = useNavigate();
     
     const handleGoToCart = () => {
          navigate("/cart");
     }



    
    return(
        <div class="card card-vertical d-flex direction-column relative shadow">
     <div class="card-image-container">
          <img class="card-image" src={image} alt="shoes"/>
     </div>
     <div class="card-details">
          <div class="card-title">{name}</div>
          <div class="card-description">
               {/* <p class="card-des">Men Sneakers</p> */}
               <p class="card-price">
                  ₹{newPrice}
               	  <span class="price-strike-through">{oldPrice}</span>
                  {/* <span class="discount">({discount})</span> */}
               </p>
          </div>
          <div class="cta-btn">
               <button class="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin" onClick={isProductInCart ? handleGoToCart : handleAddToCartClick }>
               {isProductInCart ? "Go to Cart" : "Add to Cart"}
               
               </button>
          </div>
     </div>
</div>
)
}
   
