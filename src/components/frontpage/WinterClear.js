import React from 'react'
import girlSweater from '../../assets/images/winter-clear-images/girl-with-sweater.png'
import manCoat from '../../assets/images/winter-clear-images/man-with-coat.png'

function WinterClear() {
  return (
    <div>
        <section className="winter-clear-new-arrival">
      <div className="container">
        <div className="winter-clear">
         <div className="winter-clear-content">
          <img src={girlSweater} alt="girl-with-sweater"/>
             <div className="winter-clear-text">
                <h2>Winter Clearance <br/> Up to 70% Off!</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore.</p>            
                <button>
                <i id="top-left" className="fa-solid fa-chevron-down"></i>
                   SHOP NOW
                <i id="bottom-right" className="fa-solid fa-chevron-up"></i>
                </button>
             </div>
         </div>
       </div>
       <div className="new-arrival">
          <div className="new-arrival-content">
             <img src={manCoat} alt="man-with-coat"/>
            <div className="new-arrival-text">
             <h2>NEW <br/> ARRIVAL</h2>
             <button>
              <i id="top-left" className="fa-solid fa-chevron-down"></i>
              SHOP NOW
              <i id="bottom-right" className="fa-solid fa-chevron-up"></i>
           </button>
            </div>
          </div>
       </div>
      </div>
  </section>
    </div>
  )
}

export default WinterClear