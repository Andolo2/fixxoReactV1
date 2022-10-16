import React from 'react'

function Navlinks() {
  return (
    <div>
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

    </div>
  )
}

export default Navlinks