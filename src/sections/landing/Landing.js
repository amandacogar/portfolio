import React from "react";
import { Image, Navbar, Nav, NavItem } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import logo from "./Logo.png";

function Landing() {
  return (
    <div id="landing" className="section">
      <Navbar
        bg="none"
        variant="dark"
        expand="lg"
        sticky="top"
        collapseOnSelect={true}
      >
        <Navbar.Brand as={HashLink} id="brand" smooth to="#landing">
          <Image src={logo} id="web-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="basic-navbar-nav" collapseOnSelect={true}>
          <Nav className="me-auto" defaultActiveKey={1}>
            <NavItem>
              <Nav.Link as={HashLink} smooth to="/#services" eventKey={2}>
                Services
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={HashLink} smooth to="/#how-it-works" eventKey={3}>
                Process
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
        </Navbar.Collapse>
      </Navbar>
      <div id="background-layover"></div>
      <div className="welcome">
        <h2 id="slogan">level up your small business</h2>
        <h2 id="landing-header">with a custom built website</h2>
        <br></br>
        <br></br>
        <a href="https://squareup.com/appointments/book/d7qnlrk1kvpvmb/LZ690ANSV2YT7/start">
          <button id="start">Book Appt</button>
        </a>
      </div>
    </div>
  );
}

export default Landing;
