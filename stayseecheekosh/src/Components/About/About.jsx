import React from 'react'
import Image from '../../images/smile.png'
import './about.css'


export default function About() {
  return (
    <div className='info-container'>
      <img className='picture' src={Image} />

      <p className='intro'>Hi there! My name is Stacey Csikos (Stay-see Cheek-osh).
        I'm a full stack developer. I really enjoy building
        back-ends because I feel they are the foundation to websites. With a strong foundation we
        can create really great websites for users to enjoy. I like the creativity
        and different challenges that come when developing a front-end.
        On my free time I like exploring trails, traveling the tri-state,
        and top rope climbing. Part of New York City since I was born.  
        I'm used to learning at a fast pace and working efficiently, which works really
        well with coding. 
      </p>
    </div>
  )
}
