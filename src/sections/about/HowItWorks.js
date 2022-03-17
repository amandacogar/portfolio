import React from "react";
import { Fade } from "react-awesome-reveal";

function HowItWorks() {
  return (
    <>
      <section id="how-it-works" className="section">
        <h2 id="how-header">How It Works</h2>
        <Fade bottom cascade delay={300}>
          <div className="process">
            <div className="icon">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <div className="step">
              Schedule a free consultation to discuss your business, goals, and
              ideas.
            </div>
          </div>
          <div className="process">
            <div className="icon">
              <i class="fas fa-magic"></i>
            </div>
            <div className="step">
              Based off our discussion, I will design a responsive website with
              built-in solutions to increase profits and make your business more
              efficient. We will review the design together and you are free to
              tweak, add, or remove sections as needed.
            </div>
          </div>
          <div className="process">
            <div className="icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <div className="step">
              Wait for your website design to be coded to life...
            </div>
          </div>
          <div className="process">
            <div className="icon">
              <i class="fas fa-clipboard-check"></i>
            </div>
            <div className="step">
              The code will be tested on multiple screen sizes, device types,
              and internet browsers. Additionally, I will test your site with
              real humans to ensure a flawless experience for all your
              customers.
            </div>
          </div>
          <div className="process">
            <div className="icon">
              <i className="fas fa-rocket"></i>
            </div>
            <div className="step">Launch your website!</div>
          </div>
          <div className="process">
            <div className="icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="step">
              Monitor site performance with Google Analytics.
            </div>
          </div>
          <div className="process">
            <div className="icon">
              <i className="fas fa-tools"></i>
            </div>
            <div className="step">
              Keep in touch for free website maintenance for 3 months after
              launch.
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
}

export default HowItWorks;
