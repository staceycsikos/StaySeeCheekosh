import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import hanoi from '../images/hanoi.png'
import mario from '../images/mario.png'
import movie from '../images/movie.png'




export default function Home() {
  return (
    <div>
      <h3 className='intro home-intro'>Hi there! My name is Stacey Csikos (Stay-see Cheek-osh) and I like to create websites </h3>
      <div className='project-container'>

        <Link to='/projects'><img className='pro'src={hanoi} title='Tower Of Hanoi'/></Link>
        <Link to='/projects'><img className='pro'src={mario} title='Marios World' /></Link>
        <Link to='/projects'><img className='pro'src={movie} title='7k Movies' /></Link>

      </div>
    </div>
  )
}
