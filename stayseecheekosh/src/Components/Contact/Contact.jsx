import React from 'react'
import './contact.css'
import emailjs from 'emailjs-com'

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    emailjs.sendForm('gmail', process.env.REACT_APP_TEMPLATE_ID , e.target, process.env.REACT_APP_USER_ID)
    .then((result) => {
    alert("Happy to hear from you! We'll talk soon :)", result.text);
    },
    (error) => {
    alert("An error occurred, Please try again", error.text);
      });
    e.target.reset()
    };

  return (
    <div className='div-contact'>
   
      <a className='email-button' href='mailto:staceycsikos@icloud.com' target="_blank">
       <button className='send pop'>Pop up your preffered email application </button>
      </a>
      <h2 className='or'> Or fill out on this page:</h2>
      <form className='form-container' type='submit' onSubmit={handleSubmit} >
        <input type='text' placeholder='Name' name='name'></input>
        <input type='email' placeholder='Email' name= 'email'></input>
        <textarea placeholder='Message' name= 'message'></textarea>
        <button className='send'>Send!</button>
      </form>
    </div>
  )
}
