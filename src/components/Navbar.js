import React from 'react'
import Logo from '../assets/images/nav-bar/logo.svg'

const Navbar = () => {
  return (
    <div>
       <header>
        <div class="container-fluid ">
           <a class="main-logo" href="#"><img src={Logo} alt="Fixxo logo"/></a>
           <ul class="nav-bar">
              <li><a class="menu-link" href="index.html">Home</a></li>
              <li><a class="menu-link" href="#">Categories</a></li>
              <li><a class="menu-link" href="product-page.html">Products</a></li>
              <li><a class="menu-link" href="contact.html">Contacts</a></li>
           </ul>
           <button class="hamburger">
              <i class="menuIcon"><i class="fa-sharp fa-solid fa-bars"></i></i>
              <i class="closeIcon"><i class="fa-solid fa-xmark"></i></i>
           </button>
           <div class="nav-icons">
              <div class="circle-layout">
                 <div class="circle-container">
                    <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                 </div>
                 <div class="circle-container">
                    <a href="#"><i class="fa-sharp fa-solid fa-arrows-retweet"></i></a>
                 </div>
                 <div class="circle-container">
                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                 </div>
                 <div class="circle-container">
                    <a href="#"><i class="fa-regular fa-bag-shopping"></i></a>
                 </div>
              </div>
           </div>
        </div>
    </header>
       
    </div>
  )
}

export default Navbar