
import React from 'react'
import logo from '../../assets/images/nav-bar/logo.svg'
import { NavLink } from 'react-router-dom'
function Logo() {
  return (
    <div>
      <NavLink className="main-logo" ><img src={logo} alt="Fixxo logo" to="/Home"/></NavLink>
    </div>
  )
}

export default Logo