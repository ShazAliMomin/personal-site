import React from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  return (
    <nav>
      {/* <h1 className="nav-logo">Shaz Ali Momin</h1> */}
      <img className="nav-logo" src={Logo} alt="My Logo"></img>
      <ul className="navigation">
        <li>About</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Contact Me</li>
      </ul>
      <ul className="social-links">
        <li>
          <a href="https://github.com/ShazAliMomin">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/shaz-ali-momin-514903211/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
