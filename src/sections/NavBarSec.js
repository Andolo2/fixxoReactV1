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
        <div className='nav-icons'>
        <NavIcons link="/*" icon="fa-solid fa-magnifying-glass"/>
        <NavIcons link="/*" icon="fa-sharp fa-solid fa-code-compare" />
        <NavIcons quantity={1} link="/*" icon="fa-regular fa-heart" />
        <NavIcons quantity={2} link="/*" icon="fa-regular fa-bag-shopping" />
        </div>
        
      </div>
     </header>
    </div>
  )
}

export default NavBar