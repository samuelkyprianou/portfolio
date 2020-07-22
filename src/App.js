import React from 'react';
import './App.css';
import Nav from'./components/nav'
import Home from "./components/home"
import About from "./components/about"
import Portfolio from "./components/portfolio"
import Blog from "./components/blog"
import Contact from "./components/contact" 

function App() {
  return (
    <div>
   <Nav/>
   <Home />
   <About />
   <Portfolio />
   <Blog />
   <Contact />
   </div>
  );
}

export default App;
