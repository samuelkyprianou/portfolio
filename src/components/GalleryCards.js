import React from "react";
import projects from "../data/projects.js";
import ScrollAnimation from "react-animate-on-scroll";
import { isMobile } from "react-device-detect";

export default function GalleryCards({ openModel }) {
  const createContent = (project) => {
    return (
      <div>
        <div
          className="card"
          onClick={() => { 
            if(isMobile) {
            openModel(project.id) }}}
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
    );
  };

  const createWrapper = () => {
    let animationStyle = "backInLeft";
    let cards = projects.projectsList.map((project) => {
      animationStyle === "backInLeft"
        ? (animationStyle = "backInRight")
        : (animationStyle = "backInLeft");
      if (isMobile) {
        return <div className="gallery-mobile">{createContent(project)}</div>;
      } else {
        return (
          <ScrollAnimation
            key={project.id}
            animateIn={animationStyle}
            delay={500}
            animateOnce={true}
            className="mix"
          >
            {createContent(project)}
          </ScrollAnimation>
        );
      }
    });
    return cards;
  };

  return <>{createWrapper()}</>;
}
