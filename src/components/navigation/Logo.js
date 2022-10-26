
import React from 'react'
import logo from '../../assets/images/nav-bar/logo.svg'
import { NavLink } from 'react-router-dom'
function Logo() {
  return (
   
      <NavLink className="main-logo" ><img src={logo} alt="Fixxo logo" to="/Home"/></NavLink>
   
  )
}

export default Logo