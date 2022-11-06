
import React, {useState, useEffect} from 'react'
import './App.min.css';
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';
import HomeView from './views/HomeView'
import ContactView  from './views/ContactView';
import ProductView from './views/ProductView'
import ProductDetailsView from './views/ProductDetailsView';
import NotFoundView from './views/NotFoundView';
import {productContext, featuredContext, featuredNineContext, showcaseContext} from './assets/context/context'


/*
const [products, SetProducts = useState([])



*/ 



function App() {

  


const [products, setProducts] = useState()
const [featured, setTwoFeatured] = useState()
const [nineCards, setNineCards] = useState()
const [showcase, setShowcase] = useState()

  useEffect(() => {

    const fetchEightProducts = async () => {
      // You can await here
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setProducts( await result.json())
    }
    fetchEightProducts();

    
     const fetchTwoProducts = async () => {
      // You can await here
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=2')
      setTwoFeatured(  await result.json())
      
    }
    fetchTwoProducts(); 

    const fetchNineProducts = async () => {
      // You can await here
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=9')
      setNineCards(  await result.json())
      
    }
    fetchNineProducts(); 

     const showcaseProducts = async () => {
      // You can await here
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=1')
      setShowcase(  await result.json())
      
    }
    showcaseProducts(); 

    
 
    
    
  },[setProducts, setTwoFeatured, setNineCards, setShowcase] )


  return (
    <BrowserRouter>
     <productContext.Provider value={products}>
      <featuredContext.Provider value={featured}>
        <featuredNineContext.Provider value={nineCards}>
        <showcaseContext.Provider value={showcase}>
      
     <Routes>
        <Route path='/' element={<HomeView  />} end />
        <Route path='ContactView' element={<ContactView />} />
        <Route path='ProductView' element={<ProductView />} />
        <Route path='/ProductView/:id' element={<ProductDetailsView />} />
        <Route path='*' element={<NotFoundView />} />
     </Routes>

        </showcaseContext.Provider>
       </featuredNineContext.Provider>
      </featuredContext.Provider>
     </productContext.Provider>
    </BrowserRouter>
    
  );
}

export default App;

