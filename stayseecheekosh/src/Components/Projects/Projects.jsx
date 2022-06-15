import github from '../../images/github.png'
import { projectData } from '../../project'
import './projects.css'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <div className='projects-container'>
      {projectData.map((project) => {
        return (
          <div className='top-container'>
            
              <div className='words mid'>
                <h3 className='pro-name'>{project.title}</h3>
              <p>{project.description} <Link to={`/project/${project.id}`} className='linkable-saying' >More details here!</Link></p>
              
                <div className='click-box'>
                  <a href={project.deployed} target="_blank" className='linkable-saying'> {project.saying}</a>
                  <a href={project.github} target="_blank">
                    <img src={github} className="gitty" />
                  </a>
                </div>
              </div>
            <img src={project.image} alt={project.title} className='project'/>
          </div>
        )
      })}
    </div>
  )
}
