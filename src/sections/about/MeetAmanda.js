import React from "react";
import Profile from "./Profile.jpeg";
import { Image } from "react-bootstrap";

function MeetAmanda() {
  return (
    <section id="meet-amanda" className="section">
      <container id="meet-amanda-header">
        <div id="styleLine2"></div>
        <h2 id="amanda-header">Hello, I'm Amanda the Developer</h2>
      </container>
      <container id="meet-amanda-body">
        <div id="amanda-info">
          <Image src={Profile} id="amanda-image" />
          <div className="content">
            <h3>My Mission</h3>
            <div className="amanda-info-paragraph">
              Helping entrepreneurs introduce their business to the world by
              creating professional, custom-built websites from start to finish.
              I specialize in making sites that are easy to scale and maintain.
            </div>
            <h3>Qualifications</h3>
            <div className="amanda-info-paragraph">
              <ul>
                <li>Full Stack Web Developer trained at MIT</li>
                <li>
                  Bachelors Degree from the University of Washington Seattle
                </li>
                <li>AWS Developer</li>
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
      </container>
    </section>
  );
}

export default MeetAmanda;
