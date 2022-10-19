import React from 'react'
import ProductShowcase from '../../components/ProductPage/ProductShowcase'
import ShowcaseMenu from '../../components/ProductPage/ShowcaseMenu'
import BottomMenu from '../../components/ProductPage/BottomMenu'

function ProductPageSec() {
  return (
    <section className="showcase">
        <div className="container">
        <h1>Get 25% OFF at the Fixxo Selection - Shop Now!</h1>
           <div className="display-user">
                <ProductShowcase />
                <ShowcaseMenu />
           </div>
           <BottomMenu />
        </div>
    </section>
  )
}

export default ProductPageSec