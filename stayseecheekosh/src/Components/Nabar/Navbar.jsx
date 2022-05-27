import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import pdf from '../documents/staceycsikosresume.pdf'

export default function Navbar() {
  return (
    <div className="nav">
      <Link to= '/' style={{ textDecoration: 'none' }}><h1 className='name'>Stacey Csikos</h1></Link>
      <div className= "btn-container">
        <Link to="/"><button className='btn'>Home</button></Link>
        <Link to="/about"><button className='btn'>About</button></Link>
        <Link to="/projects"><button className='btn'>Projects</button></Link>
        <Link to="/contact"><button className='btn'>Contact</button></Link>
        <a href = {pdf} target = "_blank"><button className="btn">Resume</button></a>
      </div>
    </div>
  )
}
