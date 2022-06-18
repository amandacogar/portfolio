import React from "react";
import Profile from "./Profile.jpg";
import { Image, OverlayTrigger, Tooltip } from "react-bootstrap";

function About() {
  return (
    <section id="about" className="section">
      <div id="meet-amanda-header">
        <div id="styleLine2"></div>
        <h2 id="amanda-header">About Me</h2>
      </div>
      <div id="meet-amanda-body">
        <div id="amanda-info">
          <Image
            src={Profile}
            id="amanda-image"
            alt="woman at her desk on the computer writing code"
          />
          <div className="content">
            <h3>My Mission</h3>
            <div className="amanda-info-paragraph">
              My goal is to arm small businesses with the tools they need to
              disrupt their industries and compete with large corporations. To
              do this, I focus on creating custom web experiences that attract
              new customers to your business, showcase your brand, and
              streamline your customer experience.
            </div>
            <h3>Qualifications</h3>
            <div className="amanda-info-paragraph">
              <ul>
                <li>
                  Website development certificate from Massachusetts Institute
                  of Technology
                </li>
                <li>
                  Bachelors Degree from the University of Washington Seattle
                </li>
              </ul>
            </div>
            <h3>Skills</h3>
            <div className="amanda-icon-paragraph">
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>
                    Amazon Web Services (AWS) is used for domain registration
                    and web hosting for the custom websites I create.
                  </Tooltip>
                }
              >
                <span className="lang-icons">
                  <i className="fab fa-aws"></i>
                  <span>AWS</span>
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>
                    Cascading Style Sheet (CSS) is a coding language for giving
                    style to a websites. This can include setting fonts, colors,
                    and sizing of elements.
                  </Tooltip>
                }
              >
                <span className="lang-icons">
                  <i className="fab fa-css3-alt"></i>
                  <span>CSS</span>
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>
                    Hypertext Markup Language (HTML) is a basic markup language
                    used to outline websites and display text content.
                  </Tooltip>
                }
              >
                <span className="lang-icons">
                  <i className="fab fa-html5"></i>
                  <span>HTML</span>
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>
                    Javascript is a programming language that gives
                    functionality to a website.
                  </Tooltip>
                }
              >
                <span className="lang-icons">
                  <i className="fab fa-js-square"></i>
                  <span>Javascript</span>
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>
                    MongoDB is an integrated suite of cloud database services.
                    More simply, it collects and stores the data for your
                    website.
                  </Tooltip>
                }
              >
                <span className="lang-icons">
                  <i className="fas fa-database"></i>
                  <span>MongoDB</span>
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>
                    Node.js is a platform built on Chrome's JavaScript runtime
                    for easily building fast and scalable network applications.
                  </Tooltip>
                }
              >
                <span className="lang-icons">
                  <i className="fab fa-node-js"></i>
                  <span>node-js</span>
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>
                    React is a JavaScript library for building user interfaces
                    based on UI components.
                  </Tooltip>
                }
              >
                <span className="lang-icons">
                  <i className="fab fa-react"></i>
                  <span>React</span>
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>
                    Shopify is a complete commerce platform that lets you start,
                    grow, and manage a business.
                  </Tooltip>
                }
              >
                <span className="lang-icons">
                  <i className="fab fa-shopify"></i>
                  <span>Shopify</span>
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>
                    Squarespace is a way to build websites. For an annual or
                    monthly subscription, they provide access to a set of tools
                    you can use to design your own.
                  </Tooltip>
                }
              >
                <span className="lang-icons">
                  <i className="fab fa-squarespace"></i>
                  <span>Squarespace</span>
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>
                    Wix is a subscription-based website builder for business
                    owners to design websites.
                  </Tooltip>
                }
              >
                <span className="lang-icons">
                  <i className="fab fa-wix"></i>
                  <span>Wix</span>
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>
                    WordPress is a free and open-source content management
                    system written in PHP and paired with a MySQL or MariaDB
                    database. Features include a plugin architecture and a
                    template system, referred to within WordPress as Themes.
                  </Tooltip>
                }
              >
                <span className="lang-icons">
                  <i className="fab fa-wordpress"></i>
                  <span>Wordpress</span>
                </span>
              </OverlayTrigger>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
