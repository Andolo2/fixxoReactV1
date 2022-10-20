import React from 'react'
import ProductShowcase from '../../components/ProductPage/ProductShowcase'
import ShowcaseMenu from '../../components/ProductPage/ShowcaseMenu'
import BottomMenu from '../../components/ProductPage/BottomMenu'

const ProductPageSec = ({title, productPage}) => {
  return(
    <section className="showcase">
    <div className="container">
    <h1>Get 25% OFF at the Fixxo Selection - Shop Now!</h1>
       <div className="display-user">
            
            {
              productPage.map(productPage => <ProductShowcase key={productPage.id}  item={productPage}/>)

            }
            {
               productPage.map(productPage => <ShowcaseMenu key={productPage.id}  item={productPage}/>)
            }
       </div>
       <BottomMenu />
    </div>
    
</section>

  )
}

export default ProductPageSec