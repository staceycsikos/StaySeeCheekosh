import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  return (
    <div className="nav">
      <h1 className='name'>StaySee Cheekosh</h1>
      <div className= "btn-container">
        <Link to="/about"><button>About</button></Link>
        <Link to="/projects"><button>Projects</button></Link>
        <Link to="/contact"><button>Contact</button></Link>
      </div>
    </div>
  )
}
