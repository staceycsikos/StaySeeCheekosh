import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import { projectData } from '../project'




export default function Home() {
  return (
    <div>
      <h3 className='intro home-intro'>Hi there! My name is Stacey Csikos and I like to create websites </h3>
      <div className='project-container'>
        {projectData.map((project) => {
          return (
            <div>
              <Link to={`/project/${project.id}`}>
                <img className='pro' src={project.image} title={project.title} />
                <h3 className='intro project-intro'>
                  {project.title}
                </h3>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
