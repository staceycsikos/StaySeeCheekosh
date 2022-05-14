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
              of a smaller disk. <a href="https://staceycsikos.github.io/Lucas-Tower/">Play A Game!</a></p>
        </div>
        <img src={hanoi} className='project'/>
      </div>

      <div className='top-container'>
        <div className='words'>
          <h3>Mario's World</h3>
          <p>An application for Mario fans. Users can find their
            favorite Mario friend and see their many different outfit
          changes over the years. This project pulls from an API. </p>
        </div>
        <img src={mario} className='project' />
      </div>

      <div className='top-container'>
        <div className='words'>
          <h3>7k Movies</h3>
          <p>Users are able to find a description of a selected movie.
            This application is pulling from an API that has 7k movie titles.
            The API is nested with the initial pull giving a title and an id. The id
            can then be used to gather more information about the movie. Being able to only
            make minimal API calls and filtering the data efficiently are highlights in 
            this project. 

          </p>
        </div>
        <img src={movie} className='project' />
      </div>

    </div>
  )
}
