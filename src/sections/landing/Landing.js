import React from "react";
import LandingBackground from "./sean-lim-NPlv2pkYoUA-unsplash.jpg";

function Landing() {
  return (
    <>
      <container id="landing" className="section">
        <img src={LandingBackground} id="background" alt="" />
        <div id="background-layover"></div>
        <div className="welcome">
          <h2 id="slogan">Take your business to the next level</h2>
          <h1 id="landing-header">Hire a Freelance Web Developer</h1>
          <a href="#services">
            <button id="start">Get Started</button>
          </a>
        </div>
      </container>
    </>
  );
}

export default Landing;
