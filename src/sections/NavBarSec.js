import React from 'react'
import Logo from '../components/navigation/Logo'
import NavIcons from '../components/navigation/NavIcons'
import NavLinks from '../components/navigation/Navlinks'

function NavBar() {
  return (
    <div>
     <header>
      <div className='container-fluid'>
        <Logo></Logo>
        <NavLinks></NavLinks>
        <NavIcons></NavIcons>
      </div>
     </header>
    </div>
  )
}

export default NavBar