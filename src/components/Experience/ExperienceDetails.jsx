import React from "react";
import "./ExperienceDetails.css";

function ExperienceDetails(props) {
  return (
    <div className="details-container">
      <div className="details">
        <div>
          <h2>{props.experience.title}</h2>
          <p>{props.experience.date}</p>
        </div>
        <div>
          <p>{props.experience.name}</p>
          <p>{props.experience.location}</p>
        </div>
        <ul className="description">
          {props.experience.description.map((desc) => (
            <li>{desc}</li>
          ))}
        </ul>
        <ul className="tech">
          {props.experience.tech.map((tech) => (
            <li>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceDetails;
