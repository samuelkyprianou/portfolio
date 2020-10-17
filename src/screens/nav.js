import React, { Component } from "react";
import { Link } from "react-scroll";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Navb extends Component {
  state = { activeNavBar: false };

  navLinks = () => {
    let linksNames = ["home", "about", "portfolio", "contact"];
    let links = linksNames.map((link, index) => {
      return (
        <li key={`${link}${index}`}>
          <Link
            activeClass="active"
            to={link}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => this.handleClose()}
          >
            {link}
          </Link>
        </li>
      );
    });
    return links;
  };

  navSlide = () => {
    const nav = document.getElementById("nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation.includes("navLinkFade")) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.3s ease forwards ${
          index / 8 + 0.5
        }s`;
      }
    });
  };

  handleClose = () => {
    const nav = document.getElementById("nav-links");
    if (nav.classList.value === "nav-links nav-active") {
      this.navSlide();
    }
  };

  render() {
    return (
      <nav className="nav">
        <div className="logo">
          <h4>SK</h4>
        </div>
        <ul className="nav-links" id="nav-links">
          {this.navLinks()}
        </ul>
        <div className="burger-wrapper" onClick={() => this.navSlide()}>
          <FontAwesomeIcon icon={faBars} className="burger-icon" />
        </div>
      </nav>
    );
  }
}
