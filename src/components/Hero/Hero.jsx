import React from "react";
import "./Hero.css";
import ProfileImg from "../../images/Profile_Image/Shaz.png";
import Resume from "../../images/Shaz_Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-info">
        <div className="profile-img-background">
          <img src={ProfileImg} alt="Shaz Ali Momin"></img>
        </div>
        <div className="intro-container">
          <p className="intro-text">Hi, I'm</p>
          <h1>Shaz Ali Momin</h1>
          <p>Front-End Developer</p>
          <a className="resume-button" href={Resume} download="Resume">
            <FontAwesomeIcon icon={faDownload} /> Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
