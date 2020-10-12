import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function InfoBox({ currentProject, handleModalClose }) {
  return (
    <div className="info-box">
      <div className="modal-title">{currentProject.title}</div>
      <div className="tag">{currentProject.tag}</div>
      <div className="detail">{currentProject.description}</div>
      <a href={currentProject.link}>
        <div className="modal-button visible">
          <i className="mdi mdi-open-in-new"></i>
          {currentProject.hasLink ? "View Site" : "View Source Code"}
        </div>
      </a>
      <div className="modal-close" onClick={() => handleModalClose()}>
        <FontAwesomeIcon
          icon={faTimes}
          style={{ color: "aqua", fontSize: 20 }}
        />
      </div>
    </div>
  );
}
