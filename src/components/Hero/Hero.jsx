import React from "react";
import "./Hero.css";
import ProfileImg from "../../assets/Profile_Image/Shaz.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

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
          <p>Software Developer</p>
          <button className="resume-button">
            <FontAwesomeIcon icon={faDownload} /> Resume
          </button>
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
