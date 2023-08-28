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
        ) : null}
      </div>
      <div className="nav">
        <div>
          <p className="nav-p">Connor Csoky</p>
        </div>
        <ul className="main-links">
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
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
          <a href="https://www.linkedin.com/in/connor-csoky-5012b127b">
            <img src={Linkedin} alt="linkedin" />
          </a>
          <a href="https://github.com/Connor-Csoky">
            <img src={Github} alt="Github" />
          </a>
        </div>
      </div>
    </div>
  );
}
