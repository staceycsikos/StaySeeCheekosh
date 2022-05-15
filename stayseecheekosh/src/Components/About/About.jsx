import React from 'react'
import Image from '../../images/smile.png'
import './about.css'


export default function About() {
  return (
    <div className='info-container'>
      <img className='picture' src={Image} />

      <p className='intro'>Hi there! My name is Stacey Csikos (Stay-see Cheek-osh).
        I'm a Full-Stack Developer with 6+ years of experience in the service industry.
        I really enjoy building
        back-ends because I feel they are the foundation to websites. With a strong foundation we
        can create really great websites for users to enjoy. I like the creativity
        and different challenges that come when developing a front-end.
        Part of New York City since I was born. I'm used to learning at a fast pace and working efficiently, which works really
        well with coding. I'm constantly chasing the feeling of happiness I get from accomplishments.
        I find joy in calming the waves created by problems and even more joy when finding the solution.
        As a rock climber I have to think about my next move and challenge myself to get there.
        As a developer I'm faced with an ever changing environment that allows for more solutions
        that I can find collaboratively. 
      </p>
    </div>
  )
}
