import React from "react";
import "./About.css";
import UHLogo from "../../images/UH_Red.png";

function About() {
  return (
    <div id="about" className="about-container">
      <h1>ABOUT ME</h1>
      <div className="grid-container">
        <div className="about-card">
          <p>I am the Shaz</p>
        </div>
        <div className="education-card">
          <div className="education">
            <div className="education-content">
              <img className="uh-logo" src={UHLogo} alt="UH Logo"></img>
              <div className="major">
                <h2>Education</h2>
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
            </div>
          </div>
        </div>
        <div className="skills-card">
          <h2>Skills</h2>
          <div>
            <ul className="languages">
              <li>Python</li>
              <li>C++</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>ReactJS</li>
              <li>Java</li>
              <li>Github</li>
              <li>Word</li>
              <li>Excel</li>
              <li>Powerpoint</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
