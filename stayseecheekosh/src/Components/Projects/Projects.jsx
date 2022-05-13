import React from 'react'
import hanoi from '../../images/hanoi.png'
import mario from '../../images/mario.png'
import movie from '../../images/movie.png'
import './projects.css'

export default function Projects() {
  return (
    <div className='projects-container'>
      <div className='top-container'>
        <div className='words'>
          <h3>Tower of Hanoi</h3>
          <p>One of the first applications I made using
            vanilla javascript. Some of the challenges
            of this project was using drag and drop
            accurately so that the disk would not append
            to other disk! A part I most enjoyed was creating
            the logic of not allowing a bigger disk go on top
              of a smaller disk. </p>
        </div>
        <img src={hanoi} className='project'/>
      </div>

      <div className='top-container'>
        <div className='words'>
          <h3>Mario's World</h3>
          <p>One of the first applications I made using
            vanilla javascript. Some of the challenges
            of this project was using drag and drop
            accurately so that the disk would not append
            to other disk! A part I most enjoyed was creating
            the logic of not allowing a bigger disk go on top
              of a smaller disk. </p>
        </div>
        <img src={mario} className='project' />
      </div>

      <div className='top-container'>
        <div className='words'>
          <h3>Tower of Hanoi</h3>
          <p>One of the first applications I made using
            vanilla javascript. Some of the challenges
            of this project was using drag and drop
            accurately so that the disk would not append
            to other disk! A part I most enjoyed was creating
            the logic of not allowing a bigger disk go on top
              of a smaller disk. </p>
        </div>
        <img src={movie} className='project' />
      </div>

    </div>
  )
}
