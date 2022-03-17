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
                <div>
                  Websites have a massive impact on your business' success.
                  According to Web Credibility Research from Stanford, 75% of
                  consumers use the internet to research products or services
                  before making a purchase. In other words, potential new
                  customers EXPECT a website to determine if you are a reputable
                  enough to do business with.
                </div>
                <div>
                  On top of establishing credibility with new customers, having
                  a website is a straight forward solution to make your business
                  more efficient for YOU. Having an online presence makes you
                  discoverable to a wider audience, increasing your potential
                  customer base without having to lift a finger. Additionally,
                  when a potential customer visits your website, they are often
                  seeking answers to basic questions such as opening hours,
                  contact information, and products/services sold. Putting this
                  information online allows customers to easily access the
                  answers to their questions 24/7 - even if you're unavailable.
                  This means less time spent on the phone answering basic
                  questions.
                </div>
                <div>
                  Lastly, a website provides you with an opportunity to
                  streamline administrative processes - such as appointment
                  booking, selling gift cards, or launching an email marketing
                  campaign. Allowing the code to do the busy work for you allows
                  you to focus on the important aspects on your business and be
                  more productive.
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="qCard">
              <Accordion.Header className="faq-title">
                Why would I hire a professional developer?
              </Accordion.Header>
              <Accordion.Body className="faq-text">
                <div>
                  <div>
                    It's true, in today's world, you can throw a website
                    together with Squarespace or Wix without the help of a web
                    developer. While the "DIY" option exists, it still requires
                    significant time and effort to implement. If you are not
                    skilled in website design or search engine optimization, you
                    could end up spending weeks of your valuable time creating a
                    website that hurts your business' image and causes
                    frustration for you AND your customers. Hiring a web
                    developer prevents this type of situation while still
                    allowing you to be hands-on with the design.
                  </div>
                  <div>
                    DIY website builders often produce generic websites that
                    lack advanced functionality. On the other hand, a
                    professional developer can provide a custom design that will
                    help you stand out from your competitors and has the
                    knowledge to include advanced features that will impress and
                    engage your audience.
                  </div>
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
                    this
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
