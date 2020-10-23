import React from 'react'
import { TailSpin } from "./TailSpin.js";
import ScrollAnimation from "react-animate-on-scroll";

export default function Loader() {
    return (
        <div
          className="loader"
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
          }}
        >
          <TailSpin />

          <ScrollAnimation
            animateIn="fadeIn"
            duration={1.5}
            animateOnce={true}
            delay={1000}
            className="loading-text"
          >
            SK
          </ScrollAnimation>
        </div>
    )
}
