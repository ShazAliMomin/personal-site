import React, { useState, useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const form = useRef();
  const [submitMessage, setMessage] = useState("");

  function hideMessage() {
    const message = document.getElementById("message");
    message.style.visibility = "hidden";
  }

  const sendEmail = (e) => {
    e.preventDefault();
    const message = document.getElementById("message");

    emailjs
      .sendForm(
        "service_xm9hvyb",
        "template_f52ubhk",
        form.current,
        "IULSivgrNt8xK9QW7"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Message Sent Successfully!");
          message.style.visibility = "visible";
        },
        (error) => {
          console.log(error.text);
          setMessage("Message Failed to Send. Please try again!");
          message.style.visibility = "visible";
        }
      );
  };

  return (
    <div id="contact" className="contact-container">
      <div className="socials">
        <h1>Get in Touch</h1>
        <p>
          Feel free to contact me if you have any questions or for any potential
          job opportunities!
        </p>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/shaz-ali-momin-514903211/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/shazali_momin/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>

      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <div className="input-container">
            <label>Name</label>
            <br></br>
            <input
              className="contactInput"
              type="text"
              name="user_name"
              onClick={hideMessage}
              required
            ></input>
          </div>
          <br></br>
          <div className="input-container">
            <label>Email</label>
            <br></br>
            <input
              className="contactInput"
              type="email"
              name="user_email"
              onClick={hideMessage}
              required
            ></input>
          </div>
          <br></br>
          <div className="input-container">
            <label>Message</label>
            <br></br>
            <textarea
              rows="6"
              cols="70"
              name="message"
              onClick={hideMessage}
              required
            ></textarea>
          </div>
          <br></br>
          <input className="submit" type="submit" value="Submit"></input>
        </form>
        <div className="submit-message" id="message">
          {submitMessage}
        </div>
      </div>
    </div>
  );
}

export default Contact;
