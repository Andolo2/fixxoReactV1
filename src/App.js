
import React, {useState, createContext, useEffect} from 'react'
import './App.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView'
import ContactView  from './views/ContactView';
import ProductView from './views/ProductView'
import NotFoundView from './views/NotFoundView';
import {productContext} from './assets/context/context'




function App() {

  

  const [products, setProducts] = useState([  ])
  const [featuredProduct, setfeaturedProduct] = useState([])

  useEffect(() => {
    const fetchAllProducts = async () => {
      // You can await here
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts( await result.json())
    }
    fetchAllProducts();

    const fetchFeaturedProducts = async () => {
      // You can await here
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setfeaturedProduct( await result.json())
    }
    fetchFeaturedProducts();
    

    console.log('USeeffects is working')
    
  },[setProducts,setfeaturedProduct] )


  return (
    <BrowserRouter>
     <productContext.Provider value={products}>
     <Routes>
        <Route path='/' element={<HomeView  />} />
        <Route path='ContactView' element={<ContactView />} />
        <Route path='ProductView' element={<ProductView />} />
        <Route path='*' element={<NotFoundView />} />
     </Routes>
     </productContext.Provider>
    </BrowserRouter>
    
  );
}

export default App;

