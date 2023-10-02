import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="contact-container">
      <div className="socials">
        <h1>Get in Touch</h1>
        <p>
          Feel free to contact me if you have any questions or potential job
          opportunities!
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faLinkedin} />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} />
          </li>
        </ul>
      </div>
      <div className="contact-form">
        <form
          action="mailto:momin.shazali01@gmail.com"
          method="POST"
          enctype="text/plain"
          name="EmailForm"
        >
          <div className="input-container">
            <label>Name</label>
            <br></br>
            <input className="contactInput" type="text" name="name"></input>
          </div>
          <br></br>
          <div className="input-container">
            <label>Email</label>
            <br></br>
            <input className="contactInput" type="text" name="email"></input>
          </div>
          <br></br>
          <div className="input-container">
            <label>Message</label>
            <br></br>
            <textarea rows="6" cols="70"></textarea>
          </div>
          <br></br>
          <input className="submit" type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
}

export default Contact;
