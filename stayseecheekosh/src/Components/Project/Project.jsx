import github from '../../images/github.png'
import { projectData } from '../../project'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './project.css'

export default function Project() {
  const [project, setProject] = useState(null)
  
  let name = useParams()
  
  useEffect(() => {
    if (name.id) {
      let specificProject = projectData.filter((list) => list.id === name.id)
      setProject(specificProject[0])
    }  
  }, [setProject])
  
  if (!project) return <h3>Loading</h3>

  return (
      <div className='project-container'>
        <div className='two-container'>
          <div className='description'>
            <h3 className='pro-name'>{project.title}</h3>
            <p>{project.description}</p>
            <div className='click-box'>
              <a href={project.deployed} target="_blank"> {project.saying}</a>
              <a href={project.github} target="_blank">
                <img src={github} className="gitty" />
              </a>
            </div>
          </div>
          <img src={project.image} className='specific-project' />
        </div>
      </div>
      )
  }

