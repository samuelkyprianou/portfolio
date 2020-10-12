import React from "react";
import Navb from "./screens/nav"
import Home from "./screens/home";
import About from "./screens/about";
import Portfolio from "./screens/portfolio";
import Blog from "./screens/blog";
import Contact from "./screens/contact";
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
    </div>
  );
}

export default App;
