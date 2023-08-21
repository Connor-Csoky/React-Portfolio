import React from "react";
import "./Sidenav.css";

export default function Sidenav({collapse}) {
  if(collapse) {
    return (
      <div style={{display: "flex"}} className="mySidebar">
        <ul className="link-container">
          <li>
            <a href="#" className="links">
              Education
            </a>
          </li>
          <li>
            <a href="#" className="links">
              Work
            </a>
          </li>
          <li>
            <a href="#" className="links">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="links">
              Contact
            </a>
          </li>
        </ul>
      </div>
    );
  }
  
}
