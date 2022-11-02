import React, {useState, useContext} from 'react'
import NavBarSec from '../sections/NavBarSec'
import JumboSec from '../sections/JumboSec'
import ProdCard from '../sections/productCardSec'
import WinterCard from '../sections/WinterClearSec'
import AdCards from '../sections/AdCardsSec'
import SpecCard from '../sections/SpecialitySec'
import SaleCardsSec1 from '../sections/SaleCardsSec1'
import SaleCardsSec2 from '../sections/SaleCardSec2'
import DividerSec from '../sections/DividerSec'
import NineCardSec from '../sections/NineCardSec'
import CircleLinksSec from '../sections/CircleLinksSec'
import FooterSec from '../sections/FooterSec'
import {productContext} from '../assets/context/context.js'





function Frontpage() {

 

  const [TopSaleproducts, setSaleProducts] = useState([
    {id: 1, productName: 'Modern black blouse', category: 'Fashion', price: '$35.00', rating: 5, img: 'https://images.pexels.com/photos/11833677/pexels-photo-11833677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    {id: 2, productName: 'Modern black blouse', category: 'Fashion', price: '$35.00', rating: 5, img: 'https://images.pexels.com/photos/11833677/pexels-photo-11833677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },

  ])

  const [BottomSaleproducts, setBottomSaleProducts] = useState([
    {id: 1, productName: 'Modern black blouse', category: 'Fashion', price: '$35.00', rating: 5, img: 'https://images.pexels.com/photos/11833677/pexels-photo-11833677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    {id: 2, productName: 'Modern black blouse', category: 'Fashion', price: '$35.00', rating: 5, img: 'https://images.pexels.com/photos/11833677/pexels-photo-11833677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },

  ])

  const [TopNineproducts, setTopNineproducts] = useState([
    {id: 1, productName: 'Modern black blouse', category: 'Fashion', price: '$35.00', rating: 5, img: 'https://images.pexels.com/photos/11833677/pexels-photo-11833677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    {id: 2, productName: 'Modern black blouse', category: 'Fashion', price: '$35.00', rating: 5, img: 'https://images.pexels.com/photos/11833677/pexels-photo-11833677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    {id: 3, productName: 'Modern black blouse', category: 'Fashion', price: '$35.00', rating: 5, img: 'https://images.pexels.com/photos/11833677/pexels-photo-11833677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    {id: 4, productName: 'Modern black blouse', category: 'Fashion', price: '$35.00', rating: 5, img: 'https://images.pexels.com/photos/11833677/pexels-photo-11833677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    {id: 5, productName: 'Modern black blouse', category: 'Fashion', price: '$35.00', rating: 5, img: 'https://images.pexels.com/photos/11833677/pexels-photo-11833677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    {id: 6, productName: 'Modern black blouse', category: 'Fashion', price: '$35.00', rating: 5, img: 'https://images.pexels.com/photos/11833677/pexels-photo-11833677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    {id: 7, productName: 'Modern black blouse', category: 'Fashion', price: '$35.00', rating: 5, img: 'https://images.pexels.com/photos/11833677/pexels-photo-11833677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    {id: 8, productName: 'Modern black blouse', category: 'Fashion', price: '$35.00', rating: 5, img: 'https://images.pexels.com/photos/11833677/pexels-photo-11833677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    {id: 9, productName: 'Modern black blouse', category: 'Fashion', price: '$35.00', rating: 5, img: 'https://images.pexels.com/photos/11833677/pexels-photo-11833677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },

  ])
  
  window.top.document.title = 'fixxo1';

 
  const productContexts = useContext(productContext)
  return (
    
    
    <div>
      <NavBarSec></NavBarSec>
      <JumboSec></JumboSec>
      <WinterCard></WinterCard>
      <ProdCard title='Featured Products' items={productContexts.featuredProducts}/>
      <AdCards></AdCards>
      <SpecCard></SpecCard>
      <SaleCardsSec1  TopSaleproducts={TopSaleproducts}/>
      <SaleCardsSec2  BottomSaleproducts={BottomSaleproducts}/>
      <DividerSec></DividerSec>
      <NineCardSec TopNineproducts={TopNineproducts} />
      <CircleLinksSec />
      <FooterSec />
      
      
     
      
      
      
      </div>
  )
  
}

export default Frontpage