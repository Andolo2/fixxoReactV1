import React from 'react'

function ContactForm() {

  return (
    <div className="container">
         <div className="contact-input">
            <h3>Come in Contact with Us</h3>
            <form className="contact-form" id="form" action="/">
               <div className="input-control">
                  <label htmlFor ="name"></label>
                  <input className="input-area" id="name" name="name" type="text" placeholder="Your Name"  required />
                  <span id="name-text"></span>
               </div>
               <div className="input-control">
                  <label htmlFor ="email"></label>
                  <input className="input-area" id="email" name="email" type="text" placeholder="Your Mail"  required />
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
  )
  
}

export default ContactForm