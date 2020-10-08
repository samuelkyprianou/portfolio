import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default class Portfolio extends Component {
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
          <ScrollAnimation
            animateIn="backInRight"
            delay={500}
            animateOnce={true}
            className="mix"
          >
            <div>
              <div id="volta" className="card"></div>
              <div className="text">
                <div className="bold">Volta</div>
                <span className="language">React JS</span>
              </div>
              <div className="button">Learn More</div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="backInLeft"
            delay={500}
            animateOnce={true}
            className="mix"
          >
            <div>
              <div id="food-find" className="card"></div>
              <div className="text">
                <div className="bold">Food-Find</div>
                <span className="language">React JS / Ruby</span>
              </div>
              <div className="button">Learn More</div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="backInRight"
            delay={500}
            animateOnce={true}
            className="mix"
          >
            <div>
              <div id="snappy-parking" className="card"></div>
              <div className="text">
                <div className="bold">SnAppy-Parking</div>
                <span className="language">JS / Ruby</span>
              </div>
              <div className="button">Learn More</div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="backInLeft"
            delay={500}
            animateOnce={true}
            className="mix"
          >
            <div>
              <div id="umber" className="card"></div>
              <div className="text">
                <div className="bold">Umber</div>
                <span className="language">React Native / Node</span>
              </div>
              <div className="button">Learn More</div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    );
  }
}
