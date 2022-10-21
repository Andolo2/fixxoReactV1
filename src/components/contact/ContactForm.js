import React from 'react'
import { useState } from 'react'

//EMAIL VALIDATION// //EMAIL VALIDATION// //EMAIL VALIDATION//
function ContactForm() {

   const [email, setEmail] = useState('');
   const [error, setError] = useState(null);
 
   function isValidEmail(email) {
     return /\S+@\S+\.\S+/.test(email);
   }
 
   const handleChange = event => {
     if (!isValidEmail(event.target.value)) {
       setError('Email is invalid');
     } else {
       setError(null);
     }
     
     if((isValidEmail(event.target.value))){
         setError('Email is valid');
     }
 
     setEmail(event.target.value);
   };

    //NAME VALIDATION//  //NAME VALIDATION//  //NAME VALIDATION//

   

   const [name, setName] = useState('');
   const [nameError, setnameError] = useState(null);
   
 
   function isValidName(name) {
     return /[A-Z].*[A-Z]/.test(name);
   }

  
  

   
   const handleNameChange = event => {
      if (!isValidName(event.target.value)) {
         setnameError('Name is invalid');

       
         
      } else {
         setnameError(null);
         
      }
      
      if((isValidName(event.target.value))){
         setnameError('Name is valid');
          console.log('valid')

      }

    

    

      setName(event.target.value);
    };

   
  return (
    <div className="container">
         <div className="contact-input">
            <h3>Come in Contact with Us</h3>
            <form className="contact-form" id="form" action="/">
               <div className="input-control">
                  <label htmlFor ="name"></label>
                  <input
                     className="input-area"
                     id="name"
                     name="name"
                     value={name}
                     onChange={handleNameChange}
                     placeholder="Your Name"
                     required
                     />
                     {nameError && <h4>{nameError}</h4>}

                  
               </div>
               <div className="input-control">
               
                  <input
                  className="input-area"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Your Mail"
                  required
                  />
                  {error && <h4>{error}</h4>}
               </div>

            </form>   
         </div>
         <div className="text-area">
            <textarea name="textarea" id="textarea" required>
               
            </textarea>
         </div>
         <button className="submit-form"  type="submit">Post Comments</button>
         
      </div>
  )
  
}

export default ContactForm