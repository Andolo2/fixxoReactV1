import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCards = () => {
  return(
    <div class="product-box">
    <div class="product-background"></div>
    <ul class="product-menu">
      <button><i class="fa-sharp fa-solid fa-code-compare"></i></button>
      <button><i class="fa-regular fa-heart"></i></button>
      <button><i class="fa-regular fa-bag-shopping"></i></button>
    </ul>
    <div class="quick-view">
      <button>
      <i id="top-left" class="fa-solid fa-chevron-down"></i>
      SHOP NOW
      <i id="bottom-right" class="fa-solid fa-chevron-up"></i>
      </button>
    </div>
    <div class="product-content">
      <h4>Category</h4>
      <p>Modern Black Blouse</p>
      <div class="product-stars">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      </div>
      <p id="product-price">$35.00</p>
    </div>
  </div>
  )
  
  
}

export default ProductCards