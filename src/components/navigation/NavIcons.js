import React from 'react'


function NavIcons() {
  return (
    <div>
        <div className="nav-icons">
              <div className="circle-layout">
                 <div className="circle-container">
                    <a href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
                 </div>
                 <div className="circle-container">
                    <a href="#"><i className="fa-sharp fa-solid fa-arrows-retweet"></i></a>
                 </div>
                 <div className="circle-container">
                    <a href="#"><i className="fa-regular fa-heart"></i></a>
                 </div>
                 <div className="circle-container">
                    <a href="#"><i className="fa-regular fa-bag-shopping"></i></a>
                 </div>
              </div>
           </div>
    </div>
  )
}

export default NavIcons