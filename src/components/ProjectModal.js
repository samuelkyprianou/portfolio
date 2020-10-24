import React, { useState, useEffect, useRef } from "react";
import { Modal } from "semantic-ui-react";
import "../StyleSheets/Modal.css";
import "../StyleSheets/Carousel.css";
import { useContainerDimensions } from "./UseContainerDimensions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import projects from "../data/projects.js";
import InfoBox from "./InfoBox";
import SlideImage from "./SlideImage.js"


export default function ProjectModal({ open, id, handleModalClose }) {
  const [currentProject, setCurrentProject] = useState(false);
  const componentRef = useRef();
  const { width, height } = useContainerDimensions(componentRef, open);

  useEffect(() => {
    let project = projects.projectInfo.find((project) => project.id === id);
    setCurrentProject(project);
  }, [id]);



  const getGalleryImages = () => {
    let slideImages = currentProject.images.map((image, i) => {
      return (
        <SlideImage img={image} width={width} height={height} key={`image${i}`}/>
      );
    });
    return slideImages;
  };

  const handleSlide = (direction) => {
    const carousel = document.getElementById("carousel");
    if (carousel.classList.contains("carousel-transition")) return;
    const window = document.querySelector(".window");
    let slideWidth = window.getBoundingClientRect();
    carousel.classList.add("carousel-transition");
    carousel.style.transform = `translateX(${direction * slideWidth.width}px)`;
    setTimeout(() => {
      if (direction === 1) {
        carousel.insertBefore(carousel.lastChild, carousel.childNodes[0]);
      } else if (direction === -1) {
        carousel.appendChild(carousel.firstChild);
      }
      carousel.classList.remove("carousel-transition");
      carousel.style.transform = `translateX(0px)`;
    }, 700);
  };

  return (
    <Modal onClose={() => handleModalClose()} open={open}>
      <div className="carousel-wrap" style={{ width: "100%"}}>
        <div className="window" ref={componentRef} style={{height: "100%"}}>
          <div id="carousel" style={{ left: width * -1 }}>
              {currentProject && getGalleryImages()}
          </div>
          <div className="mdi mdi-chevron-left" onClick={() => handleSlide(1)}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ color: "rgba(0, 0, 0, 0.589)", fontSize: 20 }}
            />
          </div>
          <div
            className="mdi mdi-chevron-right"
            onClick={() => handleSlide(-1)}
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ color: "rgba(0, 0, 0, 0.589)", fontSize: 20 }}
            />
          </div>
        </div>
      </div>
      {currentProject && (
        <InfoBox
          currentProject={currentProject}
          handleModalClose={handleModalClose}
        />
      )}
    </Modal>
  );
}
