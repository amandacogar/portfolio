import React from "react";

function Services() {
  return (
    <>
      <section name={"services"} id="services" className="section">
        <div id="services-header">
          <div className="styleLine"></div>
          <h2 id="service-header">Services</h2>
          <div className="styleLine"></div>
        </div>
        <div id="services-body">
          <div className="service" id="custom">
            <i className="fas fa-code"></i>
            <h3 className="service-title">Custom Websites</h3>
            <p>
              Make your business stand out with a custom website that embodies
              your brand, engineered with your customers in mind. I take the
              time to listen to your story and understand what makes you unique,
              then work with you to design and develop a professional website
              that will grow your business.
            </p>
            <p>
              Every custom website that I create comes with technical
              Search-Engine-Optimization to attract new customers to your
              business, Google Analytics to monitor your site's effectiveness, a
              custom email domain, and extensive user testing.
            </p>
          </div>
          <div className="service" id="maintenance">
            <i className="fas fa-tools"></i>
            <h3 className="service-title">Makeovers and Maintenance</h3>
            <p>
              Whether your existing site has a bug or needs a design tune-up, I
              can jump into help at any stage of the process. I save business
              owners hours of their valuable time by offering website
              maintenance and debugging for Content Management Systems such as
              Shopify, Wordpress, Wix, and SquareSpace.
            </p>
          </div>
          <div className="service" id="shopify">
            <i className="fab fa-shopify"></i>
            <h3 className="service-title">Shopify Site Development</h3>
            <p>
              Breaking into the e-commerce world has never been easier now that
              we have tools like Shopify. Even still, setting up an online store
              takes significant time and energy that many business owners can't
              afford to spend.
            </p>
            <p>
              As your one stop Shopify expert, I will manage the set-up process
              from start to finish, build a tailor-made storefront to convert
              traffic into sales, and set your business up for success.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
