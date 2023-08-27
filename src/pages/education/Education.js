import React from "react";
import "./Education.css";
import Hacc from "./Hacc.png";
import Mtsd from "./mtsd.jpg";
import Thad from "./thad.png";

export default function Education() {
  return (
      <div className="education">
        <div className="column">
          <img className="column-img" src={Thad} alt="school" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloremque, nihil minus. Ipsam debitis voluptatibus reiciendis
            facere magni tempora recusandae quos facilis deleniti molestias!
            Labore expedita nam saepe facere in. Quo animi aliquam eveniet
            perspiciatis porro?
          </p>
        </div>
        <div className="column">
          <img className="column-img" src={Hacc} alt="school" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloremque, nihil minus. Ipsam debitis voluptatibus reiciendis
            facere magni tempora recusandae quos facilis deleniti molestias!
            Labore expedita nam saepe facere in. Quo animi aliquam eveniet
            perspiciatis porro?
          </p>
        </div>
        <div className="column">
          <img className="column-img" src={Mtsd} alt="school" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloremque, nihil minus. Ipsam debitis voluptatibus reiciendis
            facere magni tempora recusandae quos facilis deleniti molestias!
            Labore expedita nam saepe facere in. Quo animi aliquam eveniet
            perspiciatis porro?
          </p>
        </div>
      </div>
  );
}
