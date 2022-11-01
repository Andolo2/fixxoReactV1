import React, { useState } from 'react'
import { submitData, validate } from '../../assets/scripts/validationContact'

const ContactForm = () => {
  let currentPage = "Contact Us"
  window.top.document.title = `${currentPage} || Fixxo` 

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comments, setComments] = useState('')
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [failedSubmit, setFailedSubmit] = useState(false)

  const handleChange = (e) => {
    const {id, value} = e.target

    switch(id) {
      case 'name':
        setName(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'comments':
        setComments(value)
        break
    }

    setErrors({...errors, [id]: validate(e)})
  }

  const handleSubmit = (e) => {
    e.preventDefault()


    setErrors(validate(e, {name, email, comments}))
  
    if (errors.name === null && errors.email === null && errors.comments === null) {

      let Json = JSON.stringify({name, email, comments})
            console.log(Json)


         setName('')
         setEmail('')
         setComments('')
         setErrors({}) 

      if(submitData('https://win22-webapi.azurewebsites.net/api/contactform', 'POST', Json)){
         setSubmitted(true)
         setFailedSubmit(false)
      }
      else{
         setSubmitted(false)
         setFailedSubmit(true)
      }
    }
   

  }

/********************************************************************OnKeyUP********************************************************/ 


const [checkName, setcheckName] = useState('');

const [nameError, setnameError] = useState('');

function isValidName(checkName) {
  return /[A-Z].*[A-Z]/.test(checkName);
}

const handleNameChange = event => {
   if (!isValidName(event.target.value)) {
      setnameError(<div className='invalidName'>Name is invalid</div>);
   } else {
      
      setnameError('');
   }
   if((isValidName(event.target.value))){
      setnameError(<div className='validName'>Name is valid</div>);
      
   }

   if(checkName.length <= 0){
      setnameError('');
   }

   setcheckName(event.target.value);
 };

 const [checkemail, setCheckEmail] = useState('');
 const [errorEmail, setErrorEmail] = useState('');

 function isValidEmail(checkemail) {
   return /\S+@\S+\.\S+/.test(checkemail);
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

   if(checkemail.length <= 0){
      setErrorEmail('');
   }

   setCheckEmail(event.target.value);
 };

   
  return (
    <div className="container">
         
         {
            submitted ? (<div className='formMessege'>Thank you for your comment!</div>)


            :

            failedSubmit ? (<div className='formMessege'>Something went wrong</div>)

            :
         
            (
               <>
               <div className="contact-input">
                  <h3>Come in Contact with Us</h3>
                  <form className="contact-form" id="form" onSubmit={handleSubmit} noValidate>
                  <div className='input-control'>
                     <input id="name" className={(errors.name ? 'error': '')} style={(errors.name ? {border: '1px solid #FF7373'}: {} )} value={name} onChange={handleChange}  onKeyUp= {handleNameChange} type="text" placeholder="Your Name" />
                     <div className="errorMessage">{errors.name}</div>
                     {nameError && <span className='nameError'>{nameError}</span>}
                  </div>
                  <div className='input-control'>
                     <input id="email" className={(errors.email ? 'error': '')} style={(errors.email ? {border: '1px solid #FF7373'}: {} )} value={email} onChange={handleChange} onKeyUp={handleEmailChange} type="email" placeholder="Your Mail" />
                     <div className="errorMessage">{errors.email}</div>
                     {errorEmail && <span className='emailError'>{errorEmail}</span>}
                  </div>
                  <div className="text-area">
                     <textarea id="comments" className={(errors.comments ? 'error': '')} style={(errors.comments ? {border: '1px solid #FF7373'}: {} )} value={comments} onChange={handleChange} placeholder="Comments"></textarea>
                     <div className="errorMessage">{errors.comments}</div>
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

export default ContactForm