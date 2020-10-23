import React, { useState, useEffect } from "react";
import Navb from "./screens/nav";
import Home from "./screens/home";
import About from "./screens/about";
import Portfolio from "./screens/portfolio";
import Contact from "./screens/contact";
import Footer from "./components/Footer";
import SideContent from "./components/SideContent";
import { TailSpin } from "./components/Spinner.js";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import "./StyleSheets/App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imgs = [
      require("./images/webp/food-find1.webp"),
      require("./images/webp/food-find2.webp"),
      require("./images/webp/food-find3.webp"),
      require("./images/webp/snappy-parking1.webp"),
      require("./images/webp/snappy-parking2.webp"),
      require("./images/webp/snappy-parking3.webp"),
      require("./images/webp/snappy-parking4.webp"),
      require("./images/webp/umber1.webp"),
      require("./images/webp/umber2.webp"),
      require("./images/webp/umber3.webp"),
      require("./images/webp/volta1.webp"),
      require("./images/webp/volta2.webp"),
      require("./images/webp/volta3.webp"),
      require("./images/background.png"),
      require("./images/food-find.png"),
      require("./images/food-find1.png"),
      require("./images/food-find2.png"),
      require("./images/food-find3.png"),
      require("./images/profile.jpeg"),
      require("./images/profile.webp"),
      require("./images/snappy-parking.png"),
      require("./images/snappy-parking1.png"),
      require("./images/snappy-parking2.png"),
      require("./images/snappy-parking3.png"),
      require("./images/snappy-parking4.png"),
      require("./images/stars.png"),
      require("./images/twinkling.png"),
      require("./images/umber.png"),
      require("./images/umber1.png"),
      require("./images/umber2.png"),
      require("./images/umber3.png"),
      require("./images/volta.png"),
      require("./images/volta1.png"),
      require("./images/volta2.png"),
      require("./images/volta3.png"),
    ];
    cacheImages(imgs);
  }, []);

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        let img = new Image();
        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });
    await Promise.all(promises).then((values) =>
      setTimeout(function () {
        setIsLoading(false);
      }, 5000)
    );
  };

  return (
    <>
      {isLoading ? (
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
      ) : (
        <div className="app">
          <Navb />
          <Home />
          <About />
          <Portfolio />
          <Contact />
          <Footer />
          <SideContent direction={"left"} />
          <SideContent direction={"right"} />
        </div>
      )}
    </>
  );
}

export default App;
