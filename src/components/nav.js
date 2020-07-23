import React, { Component } from "react";
import { Link } from "react-scroll";

export default class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="link-wrapper">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            {" "}
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            {" "}
            About{" "}
          </Link>
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            {" "}
            Portfolio{" "}
          </Link>
          <Link
            activeClass="active"
            to="blog"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            {" "}
            Blog{" "}
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            {" "}
            Contact{" "}
          </Link>
        </div>
      </div>
    );
  }
}
