import React from "react";
import "./Navigation.css";
import Linkedin from "./In-White-34.png";
import Github from "./github-mark-white.png";
import { useState } from "react";
import Sidenav from "./Sidenav";

export default function Navigation() {
  const [collapse, setCollapse] = useState(false);

  const collapseNav = () => {
    if (!collapse) {
      setCollapse(true);
    } else {
      setCollapse(false);
    }
  };

  return (
    <div>
      <div>
        <Sidenav collapse={collapse} />
        {collapse ? (
          <button
          onClick={collapseNav}
          style={{ display: "block" }}
          className="button"
        >
          &times;
        </button>
        ): null}
      </div>
      <div className="nav">
        <div>
          <p className="nav-p">Connor Csoky</p>
        </div>
        <ul className="main-links">
          <li>Education</li>
          <li>Work</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <div className="socials">
          {!collapse ? (
            <p
              onClick={collapseNav}
              style={{ display: "flex" }}
              className="collapse"
            >
              &#9776;
            </p>
          ) : null}
          <img src={Linkedin} alt="linkedin" />
          <img src={Github} alt="Github" />
        </div>
      </div>
    </div>
  );
}
