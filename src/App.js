import React from "react";
import "./App.css";
import Navb from "./components/nav"
import Home from "./components/home";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Blog from "./components/blog";
import Contact from "./components/contact";


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
