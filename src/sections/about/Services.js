import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Services() {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  const handleOnClick = (e) => {
    e.target.parentNode.classList.toggle("active");

    if (e.target.parentNode.id === "custom") {
      setActive1((prevCheck) => !prevCheck);
      window.scroll({
        top: 800,
        left: 0,
        behavior: "smooth",
      });
    } else if (e.target.parentNode.id === "maintenance") {
      setActive2((prevCheck) => !prevCheck);
      window.scroll({
        top: 1000,
        left: 0,
        behavior: "smooth",
      });
    } else {
      setActive3((prevCheck) => !prevCheck);
      window.scroll({
        top: 1400,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section name={"services"} id="services" className="section">
        <container id="services-header">
          <div className="styleLine"></div>
          <h2 id="service-header">Services</h2>
          <div className="styleLine"></div>
        </container>
        <container id="services-body">
          <div className="service" id="custom">
            <i class="fas fa-code"></i>
            <h3 className="service-title">Custom Websites</h3>
            <p hidden={!active1}>
              Make your business stand out with a custom website that embodies
              your brand, engineered with your customers in mind. I take the
              time to listen to your story and understand what makes you unique,
              then work with you to design and develop the website of your
              dreams.
            </p>
            <p hidden={!active1}>
              Every custom website that I create comes with
              Search-Engine-Optimization to attract new customers to your
              business, Google Analytics to monitor your site's effectiveness, a
              custom email domain, and will look great on every screen size.
            </p>
            <Button className="learn" onClick={handleOnClick} hidden={active1}>
              Learn More
            </Button>
          </div>
          <div className="service" id="maintenance">
            <i class="fas fa-tools"></i>
            <h3 className="service-title">Makeovers and Maintenance</h3>
            <p hidden={!active2}>
              If your website needs a tune-up, you've come to the right place! I
              save business owners hours of their valuable time by offering
              website maintenance and debugging for Content Management Systems
              such as Shopify, Wordpress, Wix, and SquareSpace.
            </p>
            <p hidden={!active2}>
              Whether you're completely redesigning your site, need someone to
              finish an incomplete project, or just need a couple of changes
              made, I can help you achieve your goals for your website.
            </p>
            <Button className="learn" onClick={handleOnClick} hidden={active2}>
              Learn More
            </Button>
          </div>
          <div className="service" id="shopify">
            <i class="fab fa-shopify"></i>
            <h3 className="service-title">Shopify Site Development</h3>
            <p hidden={!active3}>
              Breaking into the e-commerce world has never been easier with
              Shopify. Even still, setting up an online store takes significant
              time and energy that many business owners can't afford to waste.
            </p>
            <p hidden={!active3}>
              As your one stop Shopify expert, I will manage the set-up process
              from start to finish, build a tailor-made storefront to convert
              traffic into sales, and set your business up for success.
            </p>
            <Button className="learn" onClick={handleOnClick} hidden={active3}>
              Learn More
            </Button>
          </div>
        </container>
      </section>
    </>
  );
}

export default Services;
