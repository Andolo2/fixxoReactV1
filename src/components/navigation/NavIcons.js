import React from 'react'
import { NavLink } from 'react-router-dom'


const NavIcons = ({link, icon}) =>{
   return(
    

      <div className='circle-layout'>
      <div className='circle-container'>
        <NavLink className="nav-icon" to={link}>
        <i className={icon}></i>
        </NavLink>
      </div>
     </div>
   )

}

export default NavIcons

