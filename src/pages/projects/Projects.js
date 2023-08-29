import React, { startTransition } from "react";
import "./Projects.css";
import Arcade from "./arcade.png";
import RoboFriends from "./robofriends.png";
import { useState } from "react";

export default function Projects() {
  return (
    <div id="projects" className="projects">
      <div className="project-container ">
        <div className="project-text-container">
          <h1>RoboFriends</h1>
          <p>
            My first website using react. A project assigned through
            "ZeroToMastery" web development course. Essential in helping build
            my career as a web developer and develop upon my skills.
          </p>
          <button>View</button>
        </div>
        <img className="project-image" src={RoboFriends} alt="arcade" />
      </div>

      <div className="project-container project1">
        <img className="project-image" src={Arcade} alt="arcade" />
        <div className="project-text-container">
          <h1>Arcade</h1>
          <p>
            A small arcade made up of games that I created. I created the
            different games to test features such as javascripts canvas, and
            animations using html and css. This project taught me many valuable
            lessons about web development.
          </p>
          <a href="https://connor-csoky.github.io/Coding-Projects/">
            <button>View</button>
          </a>
        </div>
      </div>
    </div>
  );
}
