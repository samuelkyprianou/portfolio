import React, { useState } from "react";
import Navb from "./screens/nav";
import Home from "./screens/home";
import About from "./screens/about";
import Portfolio from "./screens/portfolio";
import Contact from "./screens/contact";
import Footer from "./components/Footer";
import SideContent from "./components/SideContent";
import Loader from "./components/Loader"
import "animate.css/animate.compat.css";
import "./StyleSheets/App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading ? (
       <Loader  setIsLoading={() => setIsLoading()} />
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
