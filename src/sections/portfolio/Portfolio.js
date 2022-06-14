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
import dilladoes from "./dilladoes.jpg";
import soon from "./soon.jpg";

SwiperCore.use([EffectCoverflow, Pagination]);

function Portfolio() {
  return (
    <>
      <section id="portfolio" className="section">
        <div id="portfolio-header">
          <div className="styleLine"></div>
          <h2 id="portfolio-title">Portfolio</h2>
          <div className="styleLine"></div>
        </div>
        <div id="portfolio-body">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
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
                  Sample website created for a vintage inspired Coffee and Wine
                  shop.
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
                  Sample website created for a local bar near Seattle, WA.
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
                  Sample nail salon website with scheduling feature.
                </h3>
                <a href="https://nails.amandacogar.com">
                  <Button className="swipe-button">View Site</Button>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src={dilladoes}
                className="web-image"
                alt="Screenshot of the landing page of the website 'dilladoes.com'"
              />
              <div className="swipe-card">
                <h2 className="swipe-card-title">Dilla Does</h2>
                <h3 className="swipe-card-description">
                  Haircuts, tattoos, and custom artwork business located in
                  Hanford, CA.
                </h3>
                <a href="https://dilladoes.com">
                  <Button className="swipe-button">View Site</Button>
                </a>
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
                <h3 className="swipe-card-description"></h3>
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
