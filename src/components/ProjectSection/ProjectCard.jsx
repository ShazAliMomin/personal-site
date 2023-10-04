import React from "react";
import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectCard(props) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="img"></div>
        <h2>{props.project.name}</h2>
        <p>{props.project.description}</p>
        <ul className="tech">
          {props.project.tech.map((tech) => (
            <li>{tech}</li>
          ))}
        </ul>
        <div className="link-container">
          <a className="repo" href={props.project.github}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
