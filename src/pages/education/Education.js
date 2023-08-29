import React from "react";
import "./Education.css";
import Hacc from "./Hacc.png";
import Mtsd from "./mtsd.jpg";
import Thad from "./thad.png";

export default function Education() {


  return (
      <div id="education" className="education">
        <div className="column">
          <img className="column-img" src={Thad} alt="school" />
          <ul>
            <li>Associate of Applied Science, Computer Software Engineering Technology</li>
            <li>Thaddeus Stevens College of Technology ▪ Lancaster, PA </li>
            <li>August 2021 – May 2023 </li>
          </ul>
        </div>
        <div className="column">
          <img className="column-img" src={Hacc} alt="school" />
          <ul>
            <li>Coursework in, Computer Information Systems </li>
            <li>Harrisburg Area Community College ▪ Lancaster, PA </li>
            <li>August 2019 – January 2020</li>
          </ul>
        </div>
        <div className="column">
          <img className="column-img" src={Mtsd} alt="school" />
          <ul>
            <li>Diploma</li>
            <li>Manheim Township High School ▪ Lancaster, PA</li>
            <li>August 2014 – May 2018</li>
          </ul>
        </div>
      </div>
  );
}
