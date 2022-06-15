import github from "../../images/github.png";
import { projectData } from "../../project";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./project.css";

export default function Project() {
  const [project, setProject] = useState(null);

  let name = useParams();

  useEffect(() => {
    if (name.id) {
      let specificProject = projectData.filter((list) => list.id === name.id);
      setProject(specificProject[0]);
    }
  }, [setProject]);

  if (!project) return <h3>Loading</h3>;

  return (
    <div className="project-container">
      <div className="two-container">
        <div className="project-and-more">
          <a href={project.deployed} target="_blank">
            <img src={project.image} alt={project.title} className="specific-project" />
          </a>
        </div>
        <div className="description">
          <h3 className="pro-name">{project.title}</h3>
          <p>{project.description}</p>
          <p className="project-title">Inspiration:</p>
          <p>{project.inspo}</p>
          <p className="project-title">Challenges:</p>
          <p>{project.challenges}</p>
          <div className="techs-container">
            {project.techs.map((tech) => {
              return <img className="tech-img" src={tech} />;
            })}
          </div>
          <div className="click-box">
            <a href={project.deployed} target="_blank">
              <button className="btn">
              {project.saying}</button>
            </a>
            <a href={project.github} target="_blank">
              <img src={github} className="project-gitty" />
            </a>
            <Link to="/projects">
              <button className="btn">More Projects</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
