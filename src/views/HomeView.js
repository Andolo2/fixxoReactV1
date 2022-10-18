import React, {useState} from 'react'
import NavBarSec from '../sections/NavBarSec'
import JumboSec from '../sections/JumboSec'
import ProdCard from '../sections/productCardSec'
import WinterCard from '../sections/WinterClearSec'
import AdCards from '../sections/AdCardsSec'
import SpecCard from '../sections/SpecialitySec'
import SaleCardsSec1 from '../sections/SaleCardsSec1'




function Frontpage() {

  const [products, setProducts] = useState([
    {id: 1, productName: 'Modern black blouse', category: 'Fashion', price: '$35.00', rating: 5, img: 'https://images.pexels.com/photos/11833677/pexels-photo-11833677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    {id: 2, productName: 'Modern black blouse', category: 'Fashion', price: '$35.00', rating: 5, img: 'https://images.pexels.com/photos/11833677/pexels-photo-11833677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    {id: 3, productName: 'Modern black blouse', category: 'Fashion', price: '$35.00', rating: 5, img: 'https://images.pexels.com/photos/11833677/pexels-photo-11833677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    {id: 4, productName: 'Modern black blouse', category: 'Fashion', price: '$35.00', rating: 5, img: 'https://images.pexels.com/photos/11833677/pexels-photo-11833677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },

  ])

  const [Saleproducts, setSaleProducts] = useState([
    {id: 1, productName: 'Modern black blouse', category: 'Fashion', price: '$35.00', rating: 5, img: 'https://images.pexels.com/photos/11833677/pexels-photo-11833677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    {id: 2, productName: 'Modern black blouse', category: 'Fashion', price: '$35.00', rating: 5, img: 'https://images.pexels.com/photos/11833677/pexels-photo-11833677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },

  ])
  return (

  
    <div>
      <NavBarSec></NavBarSec>
      <JumboSec></JumboSec>
      <WinterCard></WinterCard>
      <ProdCard products={products} />
      <AdCards></AdCards>
      <SpecCard></SpecCard>
      <SaleCardsSec1  Saleproducts={Saleproducts}/>
      
      
      
      </div>
  )
}

export default Frontpage