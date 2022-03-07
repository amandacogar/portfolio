import React from "react";
import { Accordion } from "react-bootstrap";

function FAQ() {
  return (
    <>
      <section id="FAQ" className="section">
        <div id="FAQ-header">
          <h2 id="FAQ-title">Frequently Asked Questions</h2>
          <div id="FAQ-styleLine"></div>
        </div>
        <div id="FAQ-body">
          <Accordion id="faq-container">
            <Accordion.Item eventKey="0" className="qCard">
              <Accordion.Header className="faq-title">
                Why does my business need a website?
              </Accordion.Header>
              <Accordion.Body className="faq-text">
                Websites can have a massive impact on your business' success.
                Majority of customers will look for a website before making a
                purchase. Having one establishes credibility, professionally
                showcases your products, and converts casual viewers into loyal
                customers.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="qCard">
              <Accordion.Header className="faq-title">
                Why would I hire a professional developer?
              </Accordion.Header>
              <Accordion.Body className="faq-text">
                <div>
                  It's true, you don't need me to get your business on the
                  internet when web builders like SquareSpace exist. Although
                  web builders make it easy to create generic websites without
                  code, it still takes significant time and effort to learn the
                  software and build a website for yourself. You and I both know
                  that your time costs money. How much is your time worth to
                  you?
                </div>
                <div>
                  Additionally, there are drawbacks to using pre-designed,
                  generic templates. Imagine: your competitors could be using
                  the same pre-built template design as you. Hiring a
                  professional developer sets you apart from the competition by
                  implementing a custom design and unique features that will wow
                  your customers.
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="qCard">
              <Accordion.Header className="faq-title">
                How much do you charge for a website?
              </Accordion.Header>
              <Accordion.Body className="faq-text">
                <div>
                  Custom estimates are provided for each project based on the
                  project's complexity, size, and completion timeline. A 15%
                  discount is offered to customers who pay their invoice in full
                  upfront.
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="qCard">
              <Accordion.Header className="faq-title">
                Can I afford a website?
              </Accordion.Header>
              <Accordion.Body className="faq-text">
                <div>
                  A website is an investment in the growth of your business.
                  When done professionally, a website generates leads for your
                  business that increases the size of your customer base and the
                  size of your profits. Additionally, websites can save you
                  significant time and customer service efforts by making your
                  business information readily available to the public.
                </div>
                <div>
                  This day in age, the question isn't "Can I afford a website?",
                  it is "Can I afford NOT to have one?"
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className="qCard">
              <Accordion.Header className="faq-title">
                How can I prepare for my consultation?
              </Accordion.Header>
              <Accordion.Body className="faq-text">
                <ul>
                  <li>
                    Know your goal: What do you want to achieve with your
                    website?
                  </li>
                  <li>
                    Look at your competitors websites: What are they doing
                    right? What are they doing wrong? What can you do better?
                  </li>
                  <li>
                    Learn the basics about hiring a web developer by reading
                    this{" "}
                    <a href="https://websitesetup.org/hire-a-web-developer/">
                      article
                    </a>
                    .
                  </li>
                  <li>
                    Create a folder with all your existing marketing materials:
                    We want your website to be cohesive with your brand and the
                    rest of your marketing plan. Any images, graphics, colors,
                    you can share will help move the process along.
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" className="qCard">
              <Accordion.Header className="faq-title">
                What if I'm not tech savvy?
              </Accordion.Header>
              <Accordion.Body className="faq-text">
                The good news is, you don't need to be! I handle the process
                from start to finish. Any input required from the business owner
                comes with hands-on support and pre-written instructions to help
                guide you.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
    </>
  );
}

export default FAQ;
