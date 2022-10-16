import React from 'react'
import manCoat from '../../assets/images/winter-clear-images/man-with-coat.png'
function WinterClearRight() {
  return (
    <div>
        <div class="new-arrival-content">
        <img src={manCoat} alt="man-with-coat"/>
        <div class="new-arrival-text">
             <h2>NEW <br/> ARRIVAL</h2>
             <button>
              <i id="top-left" class="fa-solid fa-chevron-down"></i>
              SHOP NOW
              <i id="bottom-right" class="fa-solid fa-chevron-up"></i>
           </button>
            </div>
        </div>
    </div>
  )
}

export default WinterClearRight