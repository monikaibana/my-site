import React from "react";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Work from "./components/Work.js";
import Resume from "./components/Resume.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import logo from "./components/images/logo-new.png";
import $ from "jquery";

$(function () {
  var header = $(".navbar");

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 15) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
  });
});

function App() {
  return (
    <div className="app">
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="resume">
        <Resume />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div className="trademark">Some kinda trademark/copyright idk</div>
      <div className="navbar">
        <div className="logo">
          <a href="#home">
            <img href="#home" src={logo} alt="logo" />
          </a>
        </div>
        <ul className="navbar-items">
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#work">
            <li>Work</li>
          </a>
          <a href="#resume">
            <li>Resume</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default App;
