import React from "react";
import "./Hero.css";
import ProfileImg from "../../assets/Profile_Image/profilepic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-info">
        <div className="profile-img-background">
          <img src={ProfileImg} alt="Shaz Ali Momin"></img>
        </div>
        <div className="intro-container">
          <h1>Hi, I'm Shaz!</h1>
          <p>Software Developer</p>
          <button className="resume-button">Download Resume</button>
        </div>
      </div>
      <div className="next-section-arrow">
        <button>
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
      </div>
    </div>
  );
}

export default Hero;
