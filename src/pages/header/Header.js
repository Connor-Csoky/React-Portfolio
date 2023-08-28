import React from "react";
import "./Header.css";
import Navigation from "../../components/Navigation";
import Greeting from "./Greeting";
import Sidenav from "../../components/Sidenav";

export default function Header(props) {
  return (
    <div id="header" className="header">
      <Navigation />
      <Sidenav />
      <Greeting />
      <div id="education"></div>
    </div>
  );
}
