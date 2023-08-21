import React, { startTransition } from "react";
import "./Projects.css";
import Arcade from "./arcade.png";
import RoboFriends from "./robofriends.png";
import { useState } from "react";

export default function Projects() {
  const [text, setText] = useState();

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 630) {
        setText("Lorem ipsum dolor sit consectetur adipisicing elit.");
      } else {
        setText("Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum\
        inventore ipsum sunt laborum velit voluptatem atque deserunt\
        reiciendis minus soluta, temporibus voluptatum molestias laudantium\
        vero aut quas veniam quasi iusto possimus? Necessitatibus laudantium\
        doloremque dolore iusto, provident eum impedit aliquam. Fugiat\
        incidunt nesciunt quidem vero distinctio cupiditate ut cumque\
        veritatis.");
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const changeText = () => {};

  return (
    <div className="projects">
      <hr />
      <div className="project-container ">
        <div className="project-text-container">
          <h1>Arcade</h1>
          <p>{text}</p>
          <button>View</button>
        </div>
        <img className="project-image" src={Arcade} alt="arcade" />
      </div>

      <div className="project-container project1">
        <img className="project-image" src={RoboFriends} alt="arcade" />
        <div className="project-text-container">
          <h1>RoboFriends</h1>
          <p>{text}</p>
          <button>View</button>
        </div>
      </div>
    </div>
  );
}
