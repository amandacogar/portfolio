import React from "react";
import Fade from "react-reveal/Slide";

function HowItWorks() {
  return (
    <>
      <section id="how-it-works" className="section">
        <h2 id="how-header">How It Works</h2>
        <Fade bottom cascade duration={1600}>
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
              <i className="fas fa-clipboard-list"></i>
            </div>
            <div className="step">
              Review and approve the project estimate, agreed objectives, and
              service contract.
            </div>
          </div>
          <div className="process">
            <div className="icon">
              <i className="fas fa-money-check-alt"></i>
            </div>
            <div className="step">Pay your project deposit.</div>
          </div>
          <div className="process">
            <div className="icon">
              <i class="fas fa-magic"></i>
            </div>
            <div className="step">
              Edit, review, and approve your project's design.
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
              <i className="fas fa-edit"></i>
            </div>
            <div className="step">
              Edit, review, and approve your finished website before it is
              launched.
            </div>
          </div>
          <div className="process">
            <div className="icon">
              <i className="fas fa-file-invoice-dollar"></i>
            </div>
            <div className="step">
              Receive your invoice and pay your bill conveniently online.
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
          <div className="process">
            <div className="icon">
              <i className="fas fa-thumbs-up"></i>
            </div>
            <div className="step">
              Write a review and tell your friends about your experience!
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
}

export default HowItWorks;
