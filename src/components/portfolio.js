import React, { Component } from "react";
import { Container } from "semantic-ui-react";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <Container fluid>
          <div className="title marker">
            <p>Portfolio</p>
          </div>
        </Container>
      </div>
    );
  }
}
