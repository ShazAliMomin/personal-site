import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faCss3 } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer-container">
      <p>Built by Shaz Ali Momin using</p>
      <div className="lang-logo">
        <FontAwesomeIcon icon={faReact} />
        <FontAwesomeIcon icon={faCss3} />
      </div>
    </div>
  );
}

export default Footer;
