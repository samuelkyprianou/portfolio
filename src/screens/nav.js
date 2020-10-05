import React, { Component, useState } from "react";
import { Link } from "react-scroll";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Navb extends Component {
state = {activeNavBar: false }

navSlide = () => {
  const nav = document.getElementById("nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation.includes("navLinkFade")) {
        link.style.animation = ""
      } else {
        link.style.animation = `navLinkFade 0.3s ease forwards ${
          index / 8 + 0.5
        }s`;
      }
    });
  };

  handleClose = () => {
    const nav = document.getElementById("nav-links");
    if (nav.classList.value === "nav-links nav-active"){
      this.navSlide()
    }
  } 

  render() {
    return (
      <nav className="nav">
        <div className="logo">
          {" "}
          <h4>SK</h4>
        </div>
        <ul className="nav-links" id="nav-links">
          <li >
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => this.handleClose()}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => this.handleClose()}
            >
              {" "}
              About{" "}
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => this.handleClose()}
            >
              {" "}
              Portfolio{" "}
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="blog"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => this.handleClose()}
            >
              {" "}
              Blog{" "}
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => this.handleClose()}
            >
              {" "}
              Contact{" "}
            </Link>
          </li>
        </ul>
        <div className="burger" id="burger" onClick={() => this.navSlide()}>
        <FontAwesomeIcon icon={faBars} style={{color: "aqua", alignSelf: "center", margin: "auto", fontSize: "20px" }}/>
        </div>
      </nav>
    );
  }
}
