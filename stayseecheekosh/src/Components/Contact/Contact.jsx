import React from 'react'
import './contact.css'
import emailjs from 'emailjs-com'
import github from '../../images/github.png'
import linkedin from '../../images/linkedin.png'

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
      <h2 className='or'>Find me on theese platforms:</h2>
      <div className='social'>
        <a href="https://github.com/staceycsikos/" target="_blank">
          <img src={github} className="gitty" /></a>
        <a href="https://www.linkedin.com/in/staceycsikos/" target="_blank">
          <img src={linkedin} className="linky" /></a>
        
      </div>
          <a href='mailto:staceycsikos@icloud.com' target="_blank"><button className='send'>Send Me a Message</button></a>


      {/* <h2 className='or'>Send me a Mesaage!</h2> */}

      {/* <form className='form-container' type='submit' onSubmit={handleSubmit} > */}
      
      {/* <form className='form-container' action="mailto:staceycsikos@icloud.com?subject=MessageFromWebsite" method="post" enctype="text/plain" target="_blank">
        <input type='text' placeholder='Name' name='name '></input>
        <input type='email' placeholder='Email' name= 'email '></input>
        <textarea placeholder='Message' name= 'message '></textarea>
        <button className='send'>Send!</button>
      </form> */}
    </div>
  )
}
