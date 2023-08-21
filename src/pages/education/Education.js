import React from "react";
import "./Education.css";
import Hacc from "./Hacc.png";
import Mtsd from "./mtsd.jpg";
import Thad from "./thad.png";

export default function Education() {
  return (
    <div className="education-container">
      <h1>Education</h1>
      <div className="education">
        <div className="column">
          <img className="column-img" src={Thad} alt="school" />
          {/* <h2>Thaddeus Stevens College of Technology</h2> */}
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, nihil minus. Ipsam debitis voluptatibus reiciendis facere magni tempora recusandae quos facilis deleniti molestias! Labore expedita nam saepe facere in. Quo animi aliquam eveniet perspiciatis porro?</p>
        </div>
        <div className="column">
          <img className="column-img" src={Hacc} alt="school" />
          {/* <h2>Harrisburg Area Community College</h2> */}
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, nihil minus. Ipsam debitis voluptatibus reiciendis facere magni tempora recusandae quos facilis deleniti molestias! Labore expedita nam saepe facere in. Quo animi aliquam eveniet perspiciatis porro?</p>
        </div>
        <div className="column">
          <img className="column-img" src={Mtsd} alt="school" />
          {/* <h2>Manheim Township Highschool</h2> */}
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, nihil minus. Ipsam debitis voluptatibus reiciendis facere magni tempora recusandae quos facilis deleniti molestias! Labore expedita nam saepe facere in. Quo animi aliquam eveniet perspiciatis porro?</p>
        </div>
      </div>
    </div>
  )
}