import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";


import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div id="about">
          <About />
        </div>
        <div id="home">
          <Home />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </Router>
  );
};

export default App;
