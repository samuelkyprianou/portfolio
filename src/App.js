import React, { useState, useEffect } from "react";
import Navb from "./screens/nav";
import Home from "./screens/home";
import About from "./screens/about";
import Portfolio from "./screens/portfolio";
import Contact from "./screens/contact";
import Footer from "./components/Footer";
import SideContent from "./components/SideContent";
import Loader from "react-loader-spinner";
import "animate.css/animate.compat.css";
import "./StyleSheets/App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imgs = [
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
        img = src;
        img.onload = resolve();
        img.onerror = reject();
        console.log(img);
      });
    });
    await Promise.all(promises);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <Loader
          type="Puff"
          color="white"
          height={"100vh"}
          width={"100%"}
          visible={isLoading}
        />
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
