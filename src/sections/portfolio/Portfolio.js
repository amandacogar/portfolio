import React from "react";
import { Button, Image } from "react-bootstrap";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.scss";
import "swiper/modules/pagination/pagination.scss";
import "swiper/modules/effect-coverflow/effect-coverflow.scss";
import coffee from "./coffee.png";
import bar from "./bar.png";

SwiperCore.use([EffectCoverflow, Pagination]);

function Portfolio() {
  return (
    <>
      <section name={"portfolio"} id="portfolio" className="section">
        <container id="portfolio-header">
          <div className="portfolio-styleLine"></div>
          <h2 id="portfolio-title">Portfolio</h2>
          <div className="portfolio-styleLine"></div>
        </container>
        <container id="portfolio-body">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={true}
            className="swiper"
          >
            <SwiperSlide className="swiper-slide">
              <Image src={coffee} className="web-image" />
              <div className="swipe-card">
                <h2 className="swipe-card-title">
                  Sample 1: Vintage Coffee and Wine
                </h2>
                <h3 className="swipe-card-description">
                  React app for small business with events, menus, contact, and
                  company information.
                </h3>
                <a href="https://coffeetemplate.amandacogar.com">
                  <Button className="swipe-button">View Site</Button>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <Image src={bar} className="web-image" />
              <div className="swipe-card">
                <h2 className="swipe-card-title">Sample 2: Local Bar</h2>
                <h3 className="swipe-card-description">
                  React app for small business with events, menus, contact, and
                  company information. Includes Google Calendar API.
                </h3>
                <a href="https://bartemplate.amandacogar.com">
                  <Button className="swipe-button">View Site</Button>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                className="web-image"
              />
              <div className="swipe-card">
                <h2 className="swipe-card-title">Sample 3: Dilla Does</h2>
                <h3 className="swipe-card-description">
                  React Sole Proprietor Business Portfolio
                </h3>
                <Button className="swipe-button">View Site</Button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                className="web-image"
              />
              <div className="swipe-card">
                <h2 className="swipe-card-title">Sample 4: E-Commerce Store</h2>
                <h3 className="swipe-card-description">
                  Shopify Drop Shipping Store
                </h3>
                <Button className="swipe-button">View Site</Button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                className="web-image"
              />
              <div className="swipe-card">
                <h2 className="swipe-card-title">Sample 5: Restaurant</h2>
                <h3 className="swipe-card-description">
                  Local Business Restaurant Website
                </h3>
                <Button className="swipe-button">View Site</Button>
              </div>
            </SwiperSlide>
          </Swiper>
        </container>
      </section>
    </>
  );
}

export default Portfolio;
