import React from "react";
import Light from "./Light";
import "./Greeting.css";

export default function Greeting() {
  return (
    <div className="greeting-container">
      <div className="greeting-text-container">
        <h1 className="greeting">Hi, I'm Connor</h1>
        <p className="greeting-text">I am an aspiring web developer</p>
      </div>
      <Light />
    </div>
  );
}
