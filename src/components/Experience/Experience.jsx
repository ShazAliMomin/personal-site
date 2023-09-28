import React, { useState } from "react";
import ExperienceDetails from "./ExperienceDetails";
import experienceList from "./ExperienceList";
import "./Experience.css";
import "./ExperienceDetails.css";

function Experience() {
  const [currentExp, setCurrentExp] = useState(experienceList.TensorIOT);

  function handleClick(event) {
    const name = event.target.name;

    const detail = document.querySelector(".details");
    detail.style.animation = "fadeIn ease 1s";

    if (name === "TensorIOT") {
      setCurrentExp(experienceList.TensorIOT);
    } else if (name === "CougarCS") {
      setCurrentExp(experienceList.CougarCS);
    } else if (name === "REC") {
      setCurrentExp(experienceList.REC);
    } else if (name === "Abercrombie") {
      setCurrentExp(experienceList.Abercrombie);
    }

    setTimeout(() => {
      detail.style.animation = "";
    }, 500);
  }

  return (
    <div className="experience-section">
      <h1>EXPERIENCE</h1>
      <div className="experience-container">
        <div className="tab">
          <button onClick={handleClick} name="TensorIOT">
            TensorIOT
          </button>
          <button onClick={handleClick} name="CougarCS">
            CougarCS
          </button>
          <button onClick={handleClick} name="REC">
            Headquarter REC
          </button>
          <button onClick={handleClick} name="Abercrombie">
            Abercrombie & Fitch
          </button>
        </div>
        <ExperienceDetails experience={currentExp} />
      </div>
    </div>
  );
}

export default Experience;
