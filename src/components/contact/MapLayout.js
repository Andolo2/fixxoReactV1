import React from 'react'

function MapLayout() {
  return (
    <section className="map-layout">
      <div className="container-fluid">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32526.46412997869!2d16.47144339877097!3d59.36794096810166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465e93b30aa1e85f%3A0x400fef341e48dd0!2sEskilstuna!5e0!3m2!1ssv!2sse!4v1665578641168!5m2!1ssv!2sse" width="100%" height="380"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="container">
         <div className="contact-input">
            <h3>Come in Contact with Us</h3>
            <form className="contact-form" id="form" action="/">
               <div className="input-control">
                  <label for="name"></label>
                  <input className="input-area" id="name" name="name" type="text" placeholder="Your Name" onkeydown="nameValidation()" required />
                  <span id="name-text"></span>
               </div>
               <div className="input-control">
                  <label for="email"></label>
                  <input className="input-area" id="email" name="email" type="text" placeholder="Your Mail" onkeydown="emailValidation()" required />
                  <span id="text"></span>
               </div>

            </form>   
         </div>
         <div className="text-area">
            <textarea name="textarea" id="textarea" required>
               
            </textarea>
         </div>
         <button className="submit-form" type="submit">Post Comments</button>
      </div>
    </section>
  )
}

export default MapLayout