import React from "react";
import ProjectCard from "./ProjectCard";
import "./Project.css";
import projectList from "./ProjectList";

function Project() {
  return (
    <div className="project-section">
      <h1>PROJECTS</h1>
      <div className="project-container">
        <ProjectCard project={projectList.Starpath} />
        <ProjectCard project={projectList.InfoDrill} />
      </div>
    </div>
  );
}

export default Project;
