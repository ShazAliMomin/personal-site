import React from "react";
import "./About.css";
import UHLogo from "../../assets/UH_Red.png";

function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h2 className="about-header">ABOUT ME</h2>
        <div className="about-me">
          <p>I am shaz</p>
        </div>
      </div>
      <div className="education-skills-card">
        {/* <h2 className="education-header">EDUCATION</h2> */}
        <div className="education">
          <h2 className="education-header">EDUCATION</h2>
          <div>
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
          <img className="uh-logo" src={UHLogo} alt="UH Logo"></img>
        </div>
        <h2 className="skills-header">SKILLS</h2>
        <div className="skills">
          <div className="languages">
            <ul>
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
