import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import hanoi from '../images/hanoi.png'
import peakscout from '../images/peakscout.png'
import movie from '../images/movie.png'
import { projectData } from '../project'




export default function Home() {
  return (
    <div>
      <h3 className='intro home-intro'>Hi there! My name is Stacey Csikos and I like to create websites </h3>
      <div className='project-container'>

        <Link to='/project/hanoi' projectData= {projectData[0]}>
          <img className='pro' src={hanoi} title='Tower Of Hanoi' />
          <h3 className='intro project-intro'>
            Tower of Hanoi
          </h3>
        </Link>
    
        <Link to='/project/peakscout'>
          <img className='pro' src={peakscout} title='Peak Scout' />
          <h3 className='intro project-intro'>
            Peak Scout
          </h3>
        </Link>
        
        <Link to='/project/7kmovies'>
          <img className='pro' src={movie} title='7k Movies' />
          <h3 className='intro project-intro'>
            7k Movies
          </h3>
        </Link>

      </div>
    </div>
  )
}
