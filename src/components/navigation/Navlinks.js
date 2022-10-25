import React from 'react'
import { NavLink } from 'react-router-dom'

function Navlinks() {
  const menu = document.querySelector(".nav-bar");
  const menuItems = document.querySelectorAll(".menu-link");
  const hamburger= document.querySelector(".hamburger");
  const closeIcon= document.querySelector(".closeIcon");
  const menuIcon = document.querySelector(".menuIcon");


  function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      menu.classList.add("showMenu");
      closeIcon.style.display = "block";
      menuIcon.style.display = "none";
    }
  }

  hamburger.addEventListener("click", toggleMenu);

  menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )

  
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

