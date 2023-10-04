import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faCss3 } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer-container">
      <div className="lang-logo">
        <FontAwesomeIcon icon={faReact} />
        <FontAwesomeIcon icon={faCss3} />
      </div>
      <p>&copy; 2023 Shaz Ali Momin</p>
    </div>
  );
}

export default Footer;
