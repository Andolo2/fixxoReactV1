import React from 'react'

const SaleCard1 = ({item}) => {

    const AddToWish = (e) => {
        console.log('Added to wish list')
      }
    
      const AddToSave = (e) => {
        console.log('Added to save list')
      }
    
      const AddToCart = (e) => {
        console.log('Added to cart list')
      }
    
    return(
        <div class="product-box">
        <div class="product-background"><img src={item.img} alt='{item.img}'/></div>
        <ul class="product-menu">
          <button onClick={AddToWish}><i class="fa-sharp fa-solid fa-code-compare"></i></button>
          <button onClick={AddToSave}><i class="fa-regular fa-heart"></i></button>
          <button onClick={AddToCart}><i class="fa-regular fa-bag-shopping"></i></button>
        </ul>
        <div class="quick-view">
          <button>
          <i id="top-left" class="fa-solid fa-chevron-down"></i>
          SHOP NOW
          <i id="bottom-right" class="fa-solid fa-chevron-up"></i>
          </button>
        </div>
        <div class="product-content">
          <h4>{item.category}</h4>
          <p>{item.productName}</p>
          <div class="product-stars">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          </div>
          <p id="product-price">{item.price}</p>
        </div>
      </div>
    )
}

export default SaleCard1