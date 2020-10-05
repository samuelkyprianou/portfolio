import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import ScrollAnimation from "react-animate-on-scroll";
import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-scroll";
import "react-awesome-button/dist/styles.css";

export default class Home extends Component {
  render() {
    return (
      <div name="home" className="home">
        <div class="stars">
        <div class="twinkling"></div>
        </div>
        <Container text id="home-title" textAlign="center">
          <ScrollAnimation animateIn="fadeInUp" delay={1000}>
            <div className="text">
              <p>
                Hello, I'm <br></br>
                <span className="highlight">Sam Kyprianou</span>. <br></br>I'm a
                full-stack web developer.{" "}
              </p>
              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <AwesomeButton className="aws-btn" type="primary">
                  My Work{" "}
                </AwesomeButton>
              </Link>
            </div>
          </ScrollAnimation>
        </Container>
      </div>
    );
  }
}
