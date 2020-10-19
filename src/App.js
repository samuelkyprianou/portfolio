import React, {useState, useEffect} from "react";
import Navb from "./screens/nav"
import Home from "./screens/home";
import About from "./screens/about";
import Portfolio from "./screens/portfolio";
import Contact from "./screens/contact";
import Footer from "./components/Footer"
import SideContent from "./components/SideContent"
import Loader from 'react-loader-spinner'
import "animate.css/animate.compat.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import "../src/StyleSheets/App.css";


function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const imgs = [
      './src/images/background.png',
      './src/images/food-find.png',
      './src/images/food-find1.png',
      './src/images/food-find2.png',
      './src/images/food-find3.png',
      './src/images/profile.jpeg',
      './src/images/profile.webp',
      './src/images/snappy-parking.png',
      './src/images/snappy-parking1.png',
      './src/images/snappy-parking2.png',
      './src/images/snappy-parking3.png',
      './src/images/snappy-parking4.png',
      './src/images/stars.png',
      './src/images/twinkling.png',
      './src/images/umber.png',
      './src/images/umber1.png',
      './src/images/umber2.png',
      './src/images/umber3.png',
      './src/images/volta.png',
      './src/images/volta1.png',
      './src/images/volta2.png',
      './src/images/volta3.png',
    ];
    cacheImages(imgs)
  }, [])


  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject){
        const img = new Image();
        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });
    await Promise.all(promises)
    setIsLoading(false)
  }

  return (
    <div>
      {isLoading ?   <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         visible={isLoading}
 
      /> :  
      <>
      <Navb />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <SideContent direction={"left"}/>
      <SideContent direction={"right"}/> 
      </>
      }
    </div>
  );
}

export default App;
