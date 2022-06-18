import React from "react";
import { Image, Navbar, Nav, NavItem, Offcanvas } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import logo from "./Logo.png";

function Landing() {
  return (
    <div id="landing" className="section">
      <Navbar variant="dark" expand={false} className="mb-3">
        <Navbar.Brand as={HashLink} id="brand" smooth to="#landing">
          <Image src={logo} id="web-logo" />
        </Navbar.Brand>
        <div>
          <span id="menu-title">MENU</span>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
        </div>
        <Navbar.Offcanvas
          aria-labelledby={`offcanvasNavbarLabel-expand-false`}
          placement="end"
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto" defaultActiveKey={1}>
              <NavItem>
                <Nav.Link as={HashLink} smooth to="/#services" eventKey={2}>
                  Services
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link as={HashLink} smooth to="/#about" eventKey={4}>
                  About
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link as={HashLink} smooth to="/#portfolio" eventKey={5}>
                  Portfolio
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link as={HashLink} smooth to="/#FAQ" eventKey={6}>
                  FAQ
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link as={HashLink} smooth to="/#contact" eventKey={7}>
                  Contact
                </Nav.Link>
              </NavItem>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
      <div id="background-layover"></div>
      <div className="welcome">
        <h2 id="slogan">level up your small business</h2>
        <h2 id="landing-header">with a custom built website</h2>
        <br></br>
        <br></br>
        <a href="https://squareup.com/appointments/book/d7qnlrk1kvpvmb/LZ690ANSV2YT7/start">
          <button id="start">Book Free Consultation</button>
        </a>
      </div>
    </div>
  );
}

export default Landing;
