import React from "react";
import projects from "../data/projects.js";
import ScrollAnimation from "react-animate-on-scroll";

export default function GalleryCards({ openModel }) {
  let animationStyle = "backInLeft";
  let cards = projects.projectsList.map((project) => {
    animationStyle === "backInLeft"
      ? (animationStyle = "backInRight")
      : (animationStyle = "backInLeft");
    return (
      <ScrollAnimation
        key={project.id}
        animateIn={animationStyle}
        delay={500}
        animateOnce={true}
        className="mix"
      >
        <div>
          <div
            className="card"
            style={{
              background: `url(${require("../images/" +
                project.id +
                ".png")}) center center/cover`,
            }}
          ></div>
          <div className="text">
            <div className="bold">{project.name}</div>
            <span className="language">{project.language}</span>
          </div>
          <div className="button" onClick={() => openModel(project.id)}>
            Learn More
          </div>
        </div>
      </ScrollAnimation>
    );
  });

  return <>{cards}</>;
}
