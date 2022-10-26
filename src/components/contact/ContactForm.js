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

    

   
  return (
    <div className="container">
         
         {
            canSubmit ? (<div>Thank you for your comment!</div>)

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
                        />
                        <div className='errorMessage'>{formError.name}</div>
                     </div>
                     
                     <div className="input-control">
                        <input
                        className="input-area"
                        id="email"
                        type="email"
                        onChange={handleChange}
                        value={ContactForm.email}
                        />
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
                  <button className="submit-form"  type="submit" value="submit">Post Comments</button>

                  </form>   
         </div>
               </>
            )


         }
         
      </div>
  )
  
}

export default ContactFormArea