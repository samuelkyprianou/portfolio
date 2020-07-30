import React, { Component } from "react";
import { Link } from "react-scroll";


export default class Nav extends Component {
    componentDidMount(){
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY > 734;
            const nav = document.getElementById('Nav');
            if (isTop){
                nav.classList.add('scrolled')
            } else {
                nav.classList.remove('scrolled')
            }
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll')
    }
  render() {
    return (
      <nav id="Nav" className="flex desk">
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
      </nav>
    );
  }
}
