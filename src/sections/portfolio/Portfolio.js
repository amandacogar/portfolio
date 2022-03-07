import React from "react";
import { Button, Image } from "react-bootstrap";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.scss";
import "swiper/modules/pagination/pagination.scss";
import "swiper/modules/effect-coverflow/effect-coverflow.scss";
import coffee from "./coffee.jpg";
import bar from "./bar.jpg";
import nails from "./nails.jpg";
import soon from "./soon.jpg";

SwiperCore.use([EffectCoverflow, Pagination]);

function Portfolio() {
  return (
    <>
      <section id="portfolio" className="section">
        <div id="portfolio-header">
          <div className="portfolio-styleLine"></div>
          <h2 id="portfolio-title">Portfolio</h2>
          <div className="portfolio-styleLine"></div>
        </div>
        <div id="portfolio-body">
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
              <Image src={coffee} className="web-image" alt="" />
              <div className="swipe-card">
                <h2 className="swipe-card-title">Coffee and Wine Shop</h2>
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
              <Image src={bar} className="web-image" alt="" />
              <div className="swipe-card">
                <h2 className="swipe-card-title">Local Bar</h2>
                <h3 className="swipe-card-description">
                  React app for small business with events, menus, contact, and
                  company information.
                </h3>
                <a href="https://bartemplate.amandacogar.com">
                  <Button className="swipe-button">View Site</Button>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src={nails} className="web-image" alt="" />
              <div className="swipe-card">
                <h2 className="swipe-card-title">Nail Salon</h2>
                <h3 className="swipe-card-description">
                  Nail Salon website with appointment scheduling and gift
                  certificate features.
                </h3>
                <Button className="swipe-button" disabled>
                  View Site
                </Button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src={soon}
                className="web-image"
                alt="white text that displays 'Coming Soon'"
              />
              <div className="swipe-card">
                <h2 className="swipe-card-title">E-Commerce Store</h2>
                <h3 className="swipe-card-description">
                  Minimalistic ceramic drop-shipping store, developed with
                  Shopify.
                </h3>
                <Button className="swipe-button" disabled>
                  View Site
                </Button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src={soon}
                className="web-image"
                alt="white text that displays 'Coming Soon'"
              />
              <div className="swipe-card">
                <h2 className="swipe-card-title">News App</h2>
                <h3 className="swipe-card-description">
                  All the updates you're looking for in one place - World News,
                  Crypto, and US Stocks using multiple APIs.
                </h3>
                <Button className="swipe-button" disabled>
                  View Site
                </Button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
