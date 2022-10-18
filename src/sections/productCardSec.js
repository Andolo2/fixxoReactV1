import React from 'react'
import ProdCards from '../components/product-cards/ProductCards'

function productCardSec() {
  return (
    <div>
      <section className="product-cards">
      <div className="product-header">
         <h2>Featured produtcs</h2>
     </div>
     <div className='container'>
      <div className='product-row1'>
        <ProdCards></ProdCards>
        <ProdCards></ProdCards>
        <ProdCards></ProdCards>
      </div>
      <div className='product-row2'>
        <ProdCards></ProdCards>
        <ProdCards></ProdCards>
        <ProdCards></ProdCards>
      </div>
      <div className='product-row3'>
        <ProdCards></ProdCards>
        <ProdCards></ProdCards>
        <ProdCards></ProdCards>
      </div>
     </div>
      </section>
    </div>
  )
}

export default productCardSec