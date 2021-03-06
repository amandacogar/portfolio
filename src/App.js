import React from "react";
import Loading from "./sections/landing/loading";
import "./styles/Navbar.css";
import Landing from "./sections/landing/Landing";
import "./styles/Landing.css";
import Services from "./sections/about/Services";
import "./styles/Services.css";
import MeetAmanda from "./sections/about/MeetAmanda";
import "./styles/MeetAmanda.css";
import Samples from "./sections/portfolio/Portfolio";
import "./styles/Portfolio.css";
import FAQ from "./sections/faq/FAQ";
import "./styles/FAQ.css";
import Contact from "./sections/contact/Contact";
import "./styles/Contact.css";
import "./styles/Responsive.css";
import "./styles/index.css";

function App() {
  return (
    <>
      <Loading />
      <Landing />
      <Services />
      <MeetAmanda />
      <Samples />
      <FAQ />
      <Contact />
    </>
  );
}

export default App;
