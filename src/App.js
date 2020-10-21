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
      "./images/webp/food-find1.webp",
      "./images/webp/food-find2.webp",
      "./images/webp/food-find3.webp",
      "./images/webp/snappy-parking1.webp",
      "./images/webp/snappy-parking2.webp",
      "./images/webp/snappy-parking3.webp",
      "./images/webp/snappy-parking4.webp",
      "./images/webp/umber1.webp",
      "./images/webp/umber2.webp",
      "./images/webp/umber3.webp",
      "./images/webp/volta1.webp",
      "./images/webp/volta2.webp",
      "./images/webp/volta3.webp",
      "./images/background.png",
      "./images/food-find.png",
      "./images/food-find1.png",
      "./images/food-find2.png",
      "./images/food-find3.png",
      "./images/profile.jpeg",
      "./images/profile.webp",
      "./images/snappy-parking.png",
      "./images/snappy-parking1.png",
      "./images/snappy-parking2.png",
      "./images/snappy-parking3.png",
      "./images/snappy-parking4.png",
      "./images/stars.png",
      "./images/twinkling.png",
      "./images/umber.png",
      "./images/umber1.png",
      "./images/umber2.png",
      "./images/umber3.png",
      "./images/volta.png",
      "./images/volta1.png",
      "./images/volta2.png",
      "./images/volta3.png",
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
        <div className="loader" style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "black"}}>

          <Loader
            type="TailSpin"
            color="aqua"
            height={200}
            width={200}
             />
        
         
          <div style={{fontSize:"25pt", color:"white", position:"absolute"}}>SK</div>
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
