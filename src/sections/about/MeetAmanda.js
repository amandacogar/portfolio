import React from "react";
import Profile from "./Profile.jpg";
import { Image } from "react-bootstrap";

function About() {
  return (
    <section id="about" className="section">
      <div id="meet-amanda-header">
        <div id="styleLine2"></div>
        <h2 id="amanda-header">About Me</h2>
      </div>
      <div id="meet-amanda-body">
        <div id="amanda-info">
          <Image src={Profile} id="amanda-image" />
          <div className="content">
            <h3>My Mission</h3>
            <div className="amanda-info-paragraph">
              Helping small businesses grow to compete with large corporations
              by providing them a platform to introduce their business to the
              world.
            </div>
            <h3>Qualifications</h3>
            <div className="amanda-info-paragraph">
              <ul>
                <li>Full Stack Web Developer trained at MIT</li>
                <li>
                  Bachelors Degree from the University of Washington Seattle
                </li>
              </ul>
            </div>
            <h3>Skills</h3>
            <div className="amanda-icon-paragraph">
              <span className="lang-icons">
                <i className="fab fa-aws"></i>
                <span>AWS</span>
              </span>
              <span className="lang-icons">
                <i className="fab fa-css3-alt"></i>
                <span>CSS</span>
              </span>
              <span className="lang-icons">
                <i className="fab fa-html5"></i>
                <span>HTML</span>
              </span>
              <span className="lang-icons">
                <i className="fab fa-js-square"></i>
                <span>Javascript</span>
              </span>
              <span className="lang-icons">
                <i className="fas fa-database"></i>
                <span>MongoDB</span>
              </span>
              <span className="lang-icons">
                <i className="fab fa-node-js"></i>
                <span>node-js</span>
              </span>
              <span className="lang-icons">
                <i className="fab fa-react"></i>
                <span>React</span>
              </span>
              <span className="lang-icons">
                <i className="fab fa-shopify"></i>
                <span>Shopify</span>
              </span>
              <span className="lang-icons">
                <i className="fab fa-squarespace"></i>
                <span>Squarespace</span>
              </span>
              <span className="lang-icons">
                <i className="fab fa-wix"></i>
                <span>Wix</span>
              </span>
              <span className="lang-icons">
                <i className="fab fa-wordpress"></i>
                <span>Wordpress</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
