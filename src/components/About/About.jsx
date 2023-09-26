import React from "react";
import "./About.css";
import UHLogo from "../../assets/UH_Red.png";

function About() {
  return (
    <div className="about-container">
      <div className="about-me-card">
        <h1>About Me</h1>
        <p></p>
      </div>
      <div className="education-skills-card">
        <div className="education">
          <img className="uh-logo" src={UHLogo} alt="UH Logo"></img>
          <p>
            University of Houston{" "}
            <span>
              | <i>2019 - 2023</i>
            </span>
          </p>
          <ul>
            <li>B.S. in Computer Science</li>
            <li>Minor in MIS</li>
            <li>Minor in Mathematics</li>
          </ul>
        </div>
        <div className="skills"></div>
      </div>
    </div>
  );
}

export default About;
