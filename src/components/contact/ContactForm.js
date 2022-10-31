import React from 'react'
import { useState } from 'react'



const ContactFormArea = () => {
   const [ContactForm, setContactForm] = useState ({name: '', email: '', comment: ''})
   const [formError, setFormError] = useState({})
   const [canSubmit, setCanSubmit] = useState(false)
   
   const validate = (values) =>{
      const errors = {}

      const regEx_email = /\S+@\S+\.\S+/;
      const regEx_name = /[A-Z].*[A-Z]/;

      

      if(!values.name)
         errors.name = 'Please enter a name'
      else if(!regEx_name.test(values.name))   
         errors.name = 'Please enter a name in correct form'

      if(!values.email)
      errors.email = 'Please enter a email'

      else if(!regEx_email.test(values.email))
      errors.email = 'Please enter a valid email'

      if(!values.comment)
      errors.comment = 'Please enter a comment'   

      else if(values.comment.length < 3)
         errors.comment = 'Minimum of 3 charachers'   

      
      if(Object.keys(errors).length === 0)
         setCanSubmit(true)
      else{
         setCanSubmit(false)
      }   


   

      return errors;
   }

 
  const handleChange = (e) =>{
         const {id, value} = e.target
         setContactForm({...ContactForm, [id]: value })
  }

  const handleSubmit = (e) => {
         e.preventDefault()
         setFormError (validate(ContactForm))
         
  }

/********************************************************************OnKeyUP********************************************************/ 


const [name, setName] = useState('');

const [nameError, setnameError] = useState('');

function isValidName(name) {
  return /[A-Z].*[A-Z]/.test(name);
}

const handleNameChange = event => {
   if (!isValidName(event.target.value)) {
      setnameError(<div className='invalidName'>Name is invalid</div>);
   } else {
      
      setnameError('');
   }
   if((isValidName(event.target.value))){
      setnameError(<div className='validName'>Name is valid</div>);
       console.log('valid')
   }

   if(name.length <= 0){
      setnameError('');
   }

   setName(event.target.value);
 };

 const [email, setEmail] = useState('');
 const [errorEmail, setErrorEmail] = useState('');

 function isValidEmail(email) {
   return /\S+@\S+\.\S+/.test(email);
 }
 

 const handleEmailChange = (event) => {
   if (!isValidEmail(event.target.value)) {
      setErrorEmail(<div className='invalid'>Email is invalid</div>);
   } 
  
   else {
      setErrorEmail('');
   }

   if((isValidEmail(event.target.value))){
      setErrorEmail(<div className='valid'>Email is valid</div>);
   }

   if(email.length <= 0){
      setErrorEmail('');
   }

   setEmail(event.target.value);
 };

   
  return (
    <div className="container">
         
         {
            canSubmit ? (<div className='formMessege'>Thank you for your comment!</div>)

            :

            (
               <>
                  <div className="contact-input">
                  <h3>Come in Contact with Us</h3>
                  <form className="contact-form" id="form" onSubmit={handleSubmit} noValidate>
                     <div className="input-control">
                        
                        <input
                           className="input-area"
                           id="name"
                           type="text"
                           value={ContactForm.name}
                           onChange={handleChange}
                           onKeyUp= {handleNameChange}
                           name="name"
  
                        />
                        {nameError && <span className='nameError'>{nameError}</span>}
                        <div className='errorMessage'>{formError.name}</div>
                     </div>
                     
                     <div className="input-control">
                        <input
                        className="input-area"
                        id="email"
                        type="email"
                        onChange={handleChange}
                        value={ContactForm.email}
                        onKeyUp={handleEmailChange}
                        />
                        {errorEmail && <span className='emailError'>{errorEmail}</span>}
                        <div className='errorMessage'>{formError.email}</div>
                     </div>
                     

                     <div className="text-area">
                     <textarea
                     name="textarea"
                     type="textarea"
                     id="comment"
                     onChange={handleChange}
                     value={ContactForm.comment} 
                    
                     
                     >
                        
                     </textarea>
                     <div className='errorMessage'>{formError.comment}</div>
                  </div>
                  <button className="submit-form"   type="submit" value="submit">Post Comments</button>

                  </form>   
         </div>
               </>
            )


         }
         
      </div>
  )
  
}

export default ContactFormArea