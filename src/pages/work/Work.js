import React from "react";
import Job from "./Job";
import Comp from "./computer.png";
import "./Work.css";

export default function Work() {
  return (
    <div className="work-wrapper">
      <div className="left-container">
        <div className="top-section">
          <h1>Work Experience</h1>
          <p>
            Thaddeus Stevens College of Technology graduate with magna cum laude
            distinction (3.92 GPA) in Computer Software Engineering Technology,
            actively pursuing an entry-level position as a Front End or Back End
            developer.
          </p>
          <button>Resume</button>
        </div>
        <Job />
      </div>
      <div className="right-container">
        <div>
          <img src={Comp} alt="test" />
        </div>
      </div>
    </div>
  );
}
