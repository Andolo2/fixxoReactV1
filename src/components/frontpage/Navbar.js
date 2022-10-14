import React from 'react'
import logo from '../../assets/images/nav-bar/logo.svg'

const Navbar = () => {
  return (
    <div>
      <header>
        <div className="container-fluid ">
           <a className="main-logo" href="#"><a class="main-logo" href="#"><img src={logo} alt="Fixxo logo"/></a></a>
           <ul className="nav-bar">
              <li><a className="menu-link" href="index.html">Home</a></li>
              <li><a className="menu-link" href="#">Categories</a></li>
              <li><a className="menu-link" href="product-page.html">Products</a></li>
              <li><a className="menu-link" href="contact.html">Contacts</a></li>
           </ul>
           <button className="hamburger">
              <i className="menuIcon"><i className="fa-sharp fa-solid fa-bars"></i></i>
              <i className="closeIcon"><i className="fa-solid fa-xmark"></i></i>
           </button>
           <div className="nav-icons">
              <div className="circle-layout">
                 <div className="circle-container">
                    <a href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
                 </div>
                 <div className="circle-container">
                    <a href="#"><i className="fa-sharp fa-solid fa-arrows-retweet"></i></a>
                 </div>
                 <div className="circle-container">
                    <a href="#"><i className="fa-regular fa-heart"></i></a>
                 </div>
                 <div className="circle-container">
                    <a href="#"><i className="fa-regular fa-bag-shopping"></i></a>
                 </div>
              </div>
           </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar