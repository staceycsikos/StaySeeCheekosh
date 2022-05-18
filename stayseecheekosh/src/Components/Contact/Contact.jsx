import React from 'react'
import './contact.css'
import emailjs from 'emailjs-com'
import github from '../../images/github.png'
import linkedin from '../../images/linkedin.png'

export default function Contact() {


  return (
    <div className='div-contact'>
      <h2 className='or'>Find me on theese platforms:</h2>
      <div className='social'>
        <a href="https://github.com/staceycsikos/" target="_blank">
          <img src={github} className="gitty" /></a>
        <a href="https://www.linkedin.com/in/staceycsikos/" target="_blank">
          <img src={linkedin} className="linky" /></a>
      </div>
      <h2 className='or'>Send me a Message</h2>
      <form className='form-container' type='submit' action="mailto:staceycsikos@icloud.com?subject=MessageFromWebsite" method="post" enctype="text/plain" target="_blank">
        <input type='text' placeholder='Name' name='Your name '></input>
        <textarea placeholder='Message' name= 'message '></textarea>
        <button className='send'>Send!</button>
      </form>
    </div>
  )
}
