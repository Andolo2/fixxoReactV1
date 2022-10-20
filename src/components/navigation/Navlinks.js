import React from 'react'
import { NavLink } from 'react-router-dom'

function Navlinks() {
  return (
    <div>
           <ul className="nav-bar">
             <NavLink className="menu-link" to="/">Home</NavLink>
             <NavLink className="menu-link" to="/Categories">Categories</NavLink>
             <NavLink className="menu-link" to="/ContactView">Contact</NavLink>
             <NavLink className="menu-link" to="/ProductView">Products</NavLink>
            
           </ul>
           <button className="hamburger">
              <i className="menuIcon"><i className="fa-sharp fa-solid fa-bars"></i></i>
              <i className="closeIcon"><i className="fa-solid fa-xmark"></i></i>
           </button>
    </div>
  )
}

export default Navlinks