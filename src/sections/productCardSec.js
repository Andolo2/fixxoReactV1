
import React from 'react'
import ProdCards from '../components/product-cards/ProductCards'


const ProdSection = ({title, items = []}) => {
  


  return (
    <section className="product-grid">
    <div className="product-header">
       <h2>{title}</h2>
   </div>
   <div className='container'>
    <div className='product-rows'>
      {
        items.map(product => <ProdCards key={product.articleNumber}  item={product}/>)
      }

    </div>


    
  </div>
    </section>
  )
}



export default ProdSection