import React from 'react'
import hanoi from '../../images/hanoi.png'
import peakscout from '../../images/peakscout.png'
import movie from '../../images/movie.png'
import github from '../../images/github.png'
import './projects.css'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <div className='projects-container'>
      <div className='top-container'>
        <div className='words mid'>
          <h3 className='pro-name'>Tower of Hanoi</h3>
          <p>One of the first applications I made using
            vanilla javascript. Some of the challenges
            of this project was using drag and drop
            accurately so that the disk would not append
            to other disk! A part I most enjoyed was creating
            the logic of not allowing a bigger disk go on top
            of a smaller disk.</p>
            <div className='click-box'>
              <a href="https://staceycsikos.github.io/Lucas-Tower/">Play A Game!</a>
              <a href="https://github.com/staceycsikos/Lucas-Tower" target="_blank">
              <img src={github} className="gitty" /></a>
            </div>
        </div>
        <img src={hanoi} className='project'/>
      </div>

      <div className='top-container'>
        <div className='words mid'>
          <h3 className='pro-name'>PeakScout</h3>
          <p>An application to find a rock climbing gym. Users are able to
            sign up and learn more about the rock climbing gyms in their area.
            Users can search for a gym and check what the gym offers. This project was
            done collaboratively. I worked on back end. The part I enjoyed most was entigrating
            user authentication with JSON web tokens. </p>
            <div className='click-box'>
              <a href="https://earnest-profiterole-786338.netlify.app/gyms">Find a place to Climb!</a>
              <a href="https://github.com/chiumz9/rock-climbing-app" target="_blank">
              <img src={github} className="gitty" /></a>
            </div>
        </div>
        <img src={peakscout} className='project' />
      </div>

      <div className='top-container'>
        <div className='words mid'>
          <h3 className='pro-name'>7k Movies</h3>
          <p>Users are able to find a description of a selected movie.
            This application is pulling from an API that has 7k movie titles.
            The API is nested with the initial pull giving a title and an id. The id
            can then be used to gather more information about the movie. Being able to only
            make minimal API calls and filtering the data efficiently are highlights in 
            this project.</p>
            <div className='click-box'>
              <a href=" https://7kmovies.netlify.app/">Explore a Movie!</a>
              <a href="https://github.com/staceycsikos/movies" target="_blank">
              <img src={github} className="gitty" /></a>
            </div>
          
        </div>
        <img src={movie} className='project' />
      </div>

    </div>
  )
}
