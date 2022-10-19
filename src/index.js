import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


/*  Setup fot the nav-bar */
const menu = document.querySelector(".nav-bar");
const menuItems = document.querySelectorAll(".menu-link");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");


function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)


/*  Setup for form validaton */ /*  Setup for form validaton */ /*  Setup for form validaton */ /*  Setup for form validaton */

function emailValidation(){
  var form = document.getElementById('form');
  var email = document.getElementById('email').value;
  var text = document.getElementById('text')

  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if(email.match(pattern)){
    form.classList.add('valid')
    form.classList.remove('invalid')
    text.innerHTML = 'your email is valid'
    text.style.color = '#00FF00';
   
  }
  else{

    form.classList.remove('valid')
    form.classList.add('invalid')
    text.innerHTML = 'your email is invalid';
    text.style.color = '#FF0000';
  }

  if(email == ''){
    form.classList.remove('valid')
    form.classList.remove('invalid')
    text.innerHTML = '';
    text.style.color = '#00ff00';
  }

}

function nameValidation(){

  var form = document.getElementById('form');
  var fullName = document.getElementById('name').value;
  var _text = document.getElementById('name-text')

   const namePattern = /[A-Z].*[A-Z]/;

  

  if(fullName.length <= 3){
    form.classList.remove('valid')
    form.classList.add('invalid')
    _text.innerHTML = 'your name is invalid';
    _text.style.color = '#FF0000';
    
  }

  if(fullName.length >= 3 && fullName.match(namePattern)){
    form.classList.add('valid')
    form.classList.remove('invalid')
    _text.innerHTML = 'your name is valid';
    _text.style.color = '#00FF00';
    
  }

  if(fullName == ''){
    form.classList.remove('valid')
    form.classList.remove('invalid')
    _text.innerHTML = '';
    _text.style.color = '#00ff00';
    console.log('empty')
  }

 
}
