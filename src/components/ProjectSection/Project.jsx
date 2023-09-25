import React from "react";
import "./Project.css";
import UHLogo from "../../assets/University-of-Houston-01.png";

function Project() {
  return (
    <div className="project-section">
      <h1>Projects</h1>
      <div className="project-container">
        <div className="grid-container">
          <div className="starpath-card">
            <img className="game-img" src={UHLogo} alt="Logo"></img>
            <h3>Starpath the Game</h3>
            <p>A top-down 2D sci-fi RPG</p>
          </div>
          <div className="infodrill-card">
            <h2>InfoDrill</h2>
            <p>A dashboard to visualize Oil and Petroleum Data</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
