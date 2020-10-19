import React, { useState, useEffect, useRef } from "react";
import { Modal } from "semantic-ui-react";
import "../StyleSheets/Modal.css";
import "../StyleSheets/Carousel.css";
import { useContainerDimensions } from "./UseContainerDimensions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import projects from "../data/projects.js";
import InfoBox from "./InfoBox";
import Loader from "react-loader-spinner";

export default function ProjectModal({ open, id, handleModalClose }) {
  const [currentProject, setCurrentProject] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  const componentRef = useRef();
  const { width } = useContainerDimensions(componentRef, open);

  useEffect(() => {
    if (id) {
      let project = projects.projectInfo.find((project) => project.id === id);
      cacheImages(project.images)
      setCurrentProject(project);
    }
    else {
      setIsLoading(true)
      setCurrentProject(false)
    }
  }, [id]);

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        let img = new Image();
        img = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });
    await Promise.all(promises);
    setIsLoading(false);
  };

  const getGalleryImages = () => {
    let galleryImages = currentProject.images.map((image, i) => {
      return (
        <div
        key={`${image}${i}`}
          className="slide"
          style={{
            background: `url(${image}), center`,
            width: width,
          }}
        ></div>
      );
    });
    return galleryImages;
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
      <div className="carousel-wrap" style={{ width: "100%" }}>
        <div className="window" ref={componentRef}>
          <div id="carousel" style={{ left: width * -1 }}>
            {isLoading ?     <Loader
          type="Puff"
          color="white"
          height={"100%"}
          width={"100%"}
          visible={isLoading}
        /> :  currentProject && getGalleryImages() }
            
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
