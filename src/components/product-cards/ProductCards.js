import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

const ProductCards = ({item}) => {
  
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
    <div className="product-box">
    <div className="product-background"><img src={item.imageName} alt='{item.img}'/></div>
    <ul className="product-menu">
      <button onClick={AddToWish}><i className="fa-sharp fa-solid fa-code-compare"></i></button>
      <button onClick={AddToSave}><i className="fa-regular fa-heart"></i></button>
      <button onClick={AddToCart}><i className="fa-regular fa-bag-shopping"></i></button>
    </ul>
    <div className="quick-view">
      <button>
      <i id="top-left" className="fa-solid fa-chevron-down"></i>
      SHOP NOW
      <i id="bottom-right" className="fa-solid fa-chevron-up"></i>
      </button>
    </div>
    <div className="product-content">
      <h4>{item.category}</h4>
      <p>{item.productName}</p>
      <div className="product-stars">
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      </div>
      <p id="product-price">{item.price}</p>
    </div>
  </div>
  )
  
  
}

export default ProductCards