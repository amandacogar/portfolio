import React from "react";
import Navigation from "./sections/landing/Navbar";
import "./styles/Navbar.css";
import Landing from "./sections/landing/Landing";
import "./styles/Landing.css";
import Services from "./sections/about/Services";
import "./styles/Services.css";
import HowItWorks from "./sections/about/HowItWorks";
import "./styles/HowItWorks.css";
import MeetAmanda from "./sections/about/MeetAmanda";
import "./styles/MeetAmanda.css";
import Portfolio from "./sections/portfolio/Portfolio";
import "./styles/Portfolio.css";
import FAQ from "./sections/faq/FAQ";
import "./styles/FAQ.css";
import Contact from "./sections/contact/Contact";
import "./styles/Contact.css";
import "./styles/Responsive.css";

function App() {
  return (
    <>
      <Navigation />
      <Landing />
      <Services />
      <HowItWorks />
      <MeetAmanda />
      <Portfolio />
      <FAQ />
      <Contact />
    </>
  );
}

export default App;
