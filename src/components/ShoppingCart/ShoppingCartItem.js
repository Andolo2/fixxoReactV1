import React from 'react'
import { useShoppingCart } from '../../assets/context/shoppingCartContext'

const  ShoppingCartItem = ({item}) => {

  const {incrementQuantity, decrementQuantity, removeItem} = useShoppingCart();
  


  return (
    <div className='shoppingCartItem'>
      <div className="item-image">
        <img src={item.product.imageName} alt={item.product.imageName}/>
      </div>
      <div className="item-info">
        <div className='item-info-name'>{item.product.name}</div>

      

        <div className='item-info-quantity'>
        <button onClick={() => incrementQuantity(item)}>+</button>
          <span>{item.quantity}</span>
          <button data-testid={item.quantity} onClick={() => decrementQuantity(item)}>-</button>
        </div>


      </div>
      <div className='item-price'>
        <div>price: {item.product.price * item.quantity}</div>
        <button onClick={() => removeItem(item.articleNumber)}><i className='fa-regular fa-trash'></i></button>
      </div>
      
    </div>
    
  )
}

export default ShoppingCartItem