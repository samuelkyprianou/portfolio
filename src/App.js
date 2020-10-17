import React from "react";
import Navb from "./screens/nav"
import Home from "./screens/home";
import About from "./screens/about";
import Portfolio from "./screens/portfolio";
import Contact from "./screens/contact";
import Footer from "./components/Footer"
import SideContent from "./components/SideContent"
import "animate.css/animate.compat.css";
import "../src/StyleSheets/App.css";


function App() {
  return (
    <div>
      <Navb />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <SideContent direction={"left"}/>
      <SideContent direction={"right"}/>
    </div>
  );
}

export default App;
