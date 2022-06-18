import { OverlayTrigger, Tooltip } from "react-bootstrap";

function Contact() {
  return (
    <>
      <section id="contact" className="section">
        <div id="contact-header">
          <div id="contact-styleLine"></div>
          <h2 id="contact-title">Contact</h2>
        </div>
        <div id="contact-body">
          <div className="circle">
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Email Me</Tooltip>}
            >
              <a href="mailto:hello@amandacogar.com">
                <i className="fas fa-envelope-open-text"></i>
              </a>
            </OverlayTrigger>
          </div>
          <div className="circle">
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Schedule a Consultation</Tooltip>}
            >
              <a href="https://squareup.com/appointments/book/d7qnlrk1kvpvmb/LZ690ANSV2YT7/start">
                <i className="fas fa-calendar-check"></i>
              </a>
            </OverlayTrigger>
          </div>
          <div className="circle">
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>See My GitHub</Tooltip>}
            >
              <a href="https://github.com/amandacogar">
                <i className="fab fa-github-alt"></i>
              </a>
            </OverlayTrigger>
          </div>
          <div className="circle">
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Connect on LinkedIn</Tooltip>}
            >
              <a href="https://www.linkedin.com/in/amanda-cogar/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </OverlayTrigger>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
