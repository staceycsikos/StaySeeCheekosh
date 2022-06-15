import './contact.css'
import github from '../../images/github.png'
import linkedin from '../../images/linkedin.png'

export default function Contact() {
  return (
    <div className='div-contact'>
      <h2 className='or'>Find me on these platforms:</h2>
      <div className='social'>
        <a href="https://github.com/staceycsikos/" target="_blank">
          <img src={github} className="gitty" /></a>
        <a href="https://www.linkedin.com/in/staceycsikos/" target="_blank">
          <img src={linkedin} className="linky" /></a>
        
      </div>
      <form className='form-container' action="https://formsubmit.co/d360e99fbbaaaff91d1fc423b5767ebb" method="POST" target="_blank">
        <input type='text' placeholder='Name' name='name' required></input>
        <input type='email' placeholder='Email' name= 'email' required></input>
        <textarea placeholder='Message' name= 'message '></textarea>
        <button className='send'>Send!</button>
      </form>
    </div>
  )
}
