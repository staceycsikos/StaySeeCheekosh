import React from 'react'
import './contact.css'

export default function Contact() {

  return (
    <div >
      <form className='form-container'type='submit'>
        <input type='text' placeholder='Name'></input>
        <input type='text' placeholder='Email'></input>
        <textarea type='' placeholder='Message'></textarea>
        <button className='send'>Send!</button>
      </form>
    </div>
  )
}
