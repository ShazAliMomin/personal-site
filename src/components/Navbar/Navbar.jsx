import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import Logo from "../../images/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  // const [showLinks, setShowLinks] = useState(true);

  return (
    <nav>
      {/* <h1 className="nav-logo">Shaz Ali Momin</h1> */}
      <img className="nav-logo" src={Logo} alt="My Logo"></img>
      <ul className="navigation">
        <li>
          <Link to="about" spy={true} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="experience" spy={true} smooth={true} duration={650}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true} duration={850}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} duration={1000}>
            Contact Me
          </Link>
        </li>
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
