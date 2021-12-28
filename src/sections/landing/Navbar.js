import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  const sections = document.querySelectorAll("section");
  const navbarLinks = document.querySelectorAll(".nav-items");

  window.addEventListener("scroll", function (event) {
    sections.forEach((section, i) => {
      if (window.scrollY >= section.offsetTop - 10) {
        navbarLinks.forEach((navbarLink) => {
          navbarLink.classList.remove("active");
        });
        navbarLinks[i].classList.add("active");
      }
    });
  });

  console.log(sections[0]);
  console.log(navbarLinks[1]);

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        sticky="top"
        collapseOnSelect={true}
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" collapseOnSelect={true}>
          <Nav className="me-auto">
            <Navbar.Brand id="brand" href="#landing" smooth={true}>
              <span id="amanda">Amanda</span>
              <span id="the-developer">the developer</span>
            </Navbar.Brand>
            <Nav.Link
              className="nav-items"
              href="#services"
              eventKey={1}
              smooth={true}
            >
              Services
            </Nav.Link>
            <Nav.Link
              className="nav-items"
              href="#how-it-works"
              eventKey={2}
              smooth={true}
            >
              How It Works
            </Nav.Link>
            <Nav.Link
              className="nav-items"
              href="#meet-amanda"
              eventKey={3}
              smooth={true}
            >
              Meet Amanda
            </Nav.Link>

            <Nav.Link
              className="nav-items"
              href="#portfolio"
              eventKey={4}
              id="portfolio-tag"
              smooth={true}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              className="nav-items"
              href="#FAQ"
              eventKey={5}
              smooth={true}
            >
              FAQ
            </Nav.Link>
            <Nav.Link
              className="nav-items"
              href="#contact"
              eventKey={6}
              smooth={true}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
