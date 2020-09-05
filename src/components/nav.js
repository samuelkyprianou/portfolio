import React, { Component } from "react";
import { Link } from "react-scroll";
import { Icon } from 'semantic-ui-react'

export default class Navb extends Component {
  navSlide = () => {
    const nav = document.getElementById("nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 8 + 0.5
        }s`;
      }
    });
  };

  render() {
    return (
      <nav className="nav">
        <div className="logo">
          {" "}
          <h4>Sam Kyp</h4>
        </div>
        <ul className="nav-links" id="nav-links">
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
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
            >
              {" "}
              Contact{" "}
            </Link>
          </li>
        </ul>
        <div className="burger" id="burger" onClick={() => this.navSlide()}>
        <Icon circular inverted color='teal' name='th list' />
        </div>
      </nav>
    );
  }
}
