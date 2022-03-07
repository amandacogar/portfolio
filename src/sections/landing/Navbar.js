import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

function Navigation() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      collapseOnSelect={true}
    >
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="basic-navbar-nav" collapseOnSelect={true}>
        <Nav className="me-auto" defaultActiveKey={1}>
          <Nav.Link as={HashLink} id="brand" smooth to="#landing" eventKey={1}>
            <span id="amanda">Amanda</span>
            <span id="the-developer">the developer</span>
          </Nav.Link>
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
  );
}

export default Navigation;
