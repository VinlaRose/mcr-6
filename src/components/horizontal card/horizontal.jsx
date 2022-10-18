export const HorizontalCard = () => {
    return(
        <div class="card-horizontal d-flex shadow">
     <div class="card-hori-image-container relative">
          {/* <img class="card-image" src="/assets/shoes.jpg" alt="shoes"/> */}
          <small class="c-badge bg-primary absolute left-0">Trending</small>
     </div>
     <div class="card-details d-flex direction-column">
          <div class="card-title">Premium Collection</div>
          <div class="card-description">
               <p class="card-des">Men Sneakers</p>
               <p class="card-price">Rs. 1750<span class="price-strike-                       through padding-all-8">Rs. 2499</span>
                  <span class="discount padding-all-8">(30% OFF)</span>
               </p>
          </div>
          <div class="quantity-container d-flex gap">
               <p class="q-title">Quantity: </p>
               <div class="count-container d-flex align-center gap">
                    <button class="count">-</button>
                    <span class="count-value">1</span>
                    <button class="count">+</button>
               </div>
          </div>
          <div class="cta-btn d-flex gap">
               <div class="cta-btn">
                   <button class="button hori-btn btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin"><img src="/assets/cart-white.png" alt="cart"/> Add To Cart</button>
               </div>
               <div class="cta-btn">
                   <button class="button hori-btn btn-outline-primary btn-               icon d-flex align-center justify-center gap cursor btn-margin">
                   Move to ❤️</button>
                </div>
          </div>
     </div>
</div>
    )
}