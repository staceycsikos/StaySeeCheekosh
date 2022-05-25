import github from '../../images/github.png'
import { projectData } from '../../project'
import './projects.css'

export default function Projects() {
  return (
    <div className='projects-container'>
      {projectData.map((project) => {
        return (
          <div className='top-container'>
            <div className='words mid'>
              <h3 className='pro-name'>{project.title}</h3>
              <p>{project.description}</p>
              <div className='click-box'>
                <a href={project.deployed} target="_blank"> {project.saying}</a>
                <a href={project.github} target="_blank">
                  <img src={github} className="gitty" />
                </a>
              </div>
            </div>
            <img src={project.image} className='project'/>
          </div>
        )
      })}
    </div>
  )
}
