import React, { Component } from "react";
import ProjectModal from "../components/ProjectModal";
import GalleryCards from "../components/GalleryCards";

export default class Portfolio extends Component {
  state = {
    open: false,
    id: "",
  };

  handleModalOpen(projectID) {
    this.setState({ open: true, id: projectID });
  }

  handleModalClose() {
    this.setState({ open: false, id: "" });
  }

  render() {
    return (
      <div id="portfolio" className="container">
        <div className="title">
          <h1>Projects</h1>
        </div>
        <div
          id="gallery"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",

            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <GalleryCards
            openModel={(projectID) => this.handleModalOpen(projectID)}
          ></GalleryCards>
          <ProjectModal
            open={this.state.open}
            id={this.state.id}
            handleModalClose={() => this.handleModalClose()}
          ></ProjectModal>
        </div>
      </div>
    );
  }
}
