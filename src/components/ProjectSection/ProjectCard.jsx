import React from "react";
import "./ProjectCard.css";

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
      </div>
    </div>
  );
}

export default ProjectCard;
