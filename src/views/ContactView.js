import NavBarSec from '../sections/NavBarSec'
import ContactNavSec from '../sections/ContactSection/ContactNavSec'
import Footer from '../sections/FooterSec'
import React from 'react'

function ContactView() {

  window.top.document.title = 'Contacts || fixxo.';
  return (
    
    <div>
      <NavBarSec />
      <ContactNavSec />
     <div>
     <Footer />
     </div>
    </div>
  )
}

export default ContactView