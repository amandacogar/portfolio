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
              custom email domain, and extensive testing.
            </p>
          </div>
          <div className="service" id="maintenance">
            <i className="fas fa-tools"></i>
            <h3 className="service-title">Makeovers and Maintenance</h3>
            <p>
              I save business owners hours of their valuable time by offering
              website maintenance, debugging, and re-design for websites built
              on Content Management Systems such as Shopify, Wordpress, Wix, and
              SquareSpace.
            </p>
            <p>
              Whether your existing website has a small problem or needs to be
              completely revamped, I can help you reach your goals at any stage
              of the process.
            </p>
          </div>
          <div className="service" id="templates">
            <i className="fas fa-file-download"></i>
            <h3 className="service-title">Wix Web Templates</h3>
            <p>
              Bored of the basic website templates that everyone else has? I
              offer template solutions for sale on Creative Market Place and
              Etsy. All templates include 5+ designed pages, 20+ curated stock
              photographs, color palette, typography scale, and are designed to
              be responsive to all screen sizes.
            </p>
            <p>
              After purchase, you can upload your custom content and modify the
              design as you see fit, making the template uniquely yours.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
