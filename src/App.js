
import React, {useState, createContext} from 'react'
import './App.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView'
import ContactView  from './views/ContactView';
import ProductView from './views/ProductView'
import NotFoundView from './views/NotFoundView';
import {productContext} from './assets/context/context'




function App() {

  

  const [products, setProducts] = useState([
    {id: 1, productName: 'Modern black blouse', category: 'Fashion', price: '$35.00', rating: 5, img: 'https://images.pexels.com/photos/11833677/pexels-photo-11833677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    {id: 2, productName: 'Modern black blouse', category: 'Fashion', price: '$35.00', rating: 5, img: 'https://images.pexels.com/photos/11833677/pexels-photo-11833677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    {id: 3, productName: 'Modern black blouse', category: 'Fashion', price: '$35.00', rating: 5, img: 'https://images.pexels.com/photos/11833677/pexels-photo-11833677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    {id: 4, productName: 'Modern black blouse', category: 'Fashion', price: '$35.00', rating: 5, img: 'https://images.pexels.com/photos/11833677/pexels-photo-11833677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    {id: 5, productName: 'Modern black blouse', category: 'Fashion', price: '$35.00', rating: 5, img: 'https://images.pexels.com/photos/11833677/pexels-photo-11833677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    {id: 6, productName: 'Modern black blouse', category: 'Fashion', price: '$35.00', rating: 5, img: 'https://images.pexels.com/photos/11833677/pexels-photo-11833677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    {id: 7, productName: 'Modern black blouse', category: 'Fashion', price: '$35.00', rating: 5, img: 'https://images.pexels.com/photos/11833677/pexels-photo-11833677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    {id: 8, productName: 'Modern black blouse', category: 'Fashion', price: '$35.00', rating: 5, img: 'https://images.pexels.com/photos/11833677/pexels-photo-11833677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    
  ])




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

