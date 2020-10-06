import React from "react";
import Navb from "./screens/nav"
import Home from "./screens/home";
import About from "./screens/about";
import Portfolio from "./screens/portfolio";
import Blog from "./screens/blog";
import Contact from "./screens/contact";
import "animate.css/animate.compat.css";
import 'semantic-ui-css/semantic.min.css'
import "./App.css";


function App() {
  return (
    <div>
      <Navb />
      <Home />
      <About />
      <Portfolio />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
