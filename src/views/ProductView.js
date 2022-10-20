import NavBarSec from '../sections/NavBarSec'
import ProductPageSec from '../sections/ProductPage/ProductPageSec'
import React, {useState} from 'react'
import Footer from '../sections/FooterSec'


function ProductPage() {

  const [productPage, setproductPage] = useState([
    {id: 1, productName: 'Modern black blouse', brand: 'SKU: 12345670 BRAND: The Northland ', price: '$55.00', info: 'textInfo' ,rating: 5, img: 'https://images.pexels.com/photos/13094187/pexels-photo-13094187.jpeg?auto=compress&cs=tinysrgb&w=1600'}

  ])

  return (
    <div>
      <NavBarSec></NavBarSec>
      <ProductPageSec productPage={productPage}/>
      <Footer />
      </div>
  )
}

export default ProductPage