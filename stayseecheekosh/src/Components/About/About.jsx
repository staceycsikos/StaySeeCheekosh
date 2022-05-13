import React from 'react'
import Image from '../../images/smile.png'
import './about.css'


export default function About() {
  return (
    <div className='info-container'>
      <img className='picture' src={Image} />

      <p className='intro'>Hi there! My name is Stacey Csikos (Stay-see Cheek-osh).
        I'm a full stack developer. I really enjoy building
        back-ends because I feel that is the foundation for websites.
        I like the creativity that comes with developing a front-end.
        On my free time I like exploring trails, traveling the tri-state,
        and top rope climbing. 
      </p>
    </div>
  )
}
