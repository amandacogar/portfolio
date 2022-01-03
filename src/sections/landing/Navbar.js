import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import Scrollspy from "react-scrollspy";

function Navigation() {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        sticky="top"
        collapseOnSelect={true}
      >
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="basic-navbar-nav" collapseOnSelect={true}>
          <Nav className="me-auto" navbarScroll={true} activeKey={1}>
            <Nav.Link id="brand" href="#landing" eventKey={1}>
              <span id="amanda">Amanda</span>
              <span id="the-developer">the developer</span>
            </Nav.Link>
            <NavItem>
              <Nav.Link className="nav-items" href="#services" eventKey={2}>
                Services
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link className="nav-items" href="#how-it-works" eventKey={3}>
                How It Works
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link className="nav-items" href="#meet-amanda" eventKey={4}>
                Meet Amanda
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link className="nav-items" href="#samples" eventKey={5}>
                Portfolio
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link className="nav-items" href="#FAQ" eventKey={6}>
                FAQ
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link className="nav-items" href="#contact" eventKey={7}>
                Contact
              </Nav.Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
