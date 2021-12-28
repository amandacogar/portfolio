import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function Contact() {
  return (
    <>
      <section name={"contact"} id="contact" className="section">
        <container id="contact-header">
          <div id="contact-styleLine"></div>
          <h2 id="contact-title">Contact</h2>
        </container>
        <container id="contact-body">
          <div className="circle">
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Request a Consultation</Tooltip>}
            >
              <a href="https://www.linkedin.com/in/amanda-cogar/">
                <i class="fas fa-calendar-alt"></i>
              </a>
            </OverlayTrigger>
          </div>
          <div className="circle">
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Email Me</Tooltip>}
            >
              <a href="mailto:mandycogar@gmail.com">
                <i class="fas fa-envelope-open-text"></i>
              </a>
            </OverlayTrigger>
          </div>
          <div className="circle">
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>See My GitHub</Tooltip>}
            >
              <a href="https://github.com/amandacogar">
                <i class="fab fa-github-alt"></i>
              </a>
            </OverlayTrigger>
          </div>
          <div className="circle">
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Connect on LinkedIn</Tooltip>}
            >
              <a href="https://www.linkedin.com/in/amanda-cogar/">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </OverlayTrigger>
          </div>
        </container>
      </section>
    </>
  );
}

export default Contact;