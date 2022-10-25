import NavBarSec from '../sections/NavBarSec'
import React from 'react'

function NotFoundView() {

  window.top.document.title = 'NOT FOUND || fixxo.';
  return (
    <div>
      <NavBarSec></NavBarSec>
      404 - Page not found
      </div>
  )
}

export default NotFoundView