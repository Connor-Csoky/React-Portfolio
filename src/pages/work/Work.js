import React from "react";
import Job from "./Job";
import Comp from "./computer.png";
import "./Work.css";

export default function Work() {
  return (
    <div>
      <hr className="default" />
      <div className="work-container">
        <div className="left-container">
          <div className="top-section">
            <h1>Work Experience</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              perferendis vero beatae est omnis laudantium sed dolores, commodi
              placeat, nostrum maxime facere perspiciatis illo nisi.
            </p>
            <button>Resume</button>
          </div>
          <div className="bottom-section">
            <Job />
            <Job />
          </div>
        </div>
        <div className="right-container">
          <img src={Comp} alt="test" />
        </div>
      </div>
    </div>
  );
}
