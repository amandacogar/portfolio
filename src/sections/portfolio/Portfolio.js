import React from "react";
import { Button } from "react-bootstrap";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.scss";
import "swiper/modules/pagination/pagination.scss";
import "swiper/modules/effect-coverflow/effect-coverflow.scss";

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
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              <div className="swipe-card">
                <h2 className="swipe-card-title">Sample 1: Amanda News</h2>
                <h3 className="swipe-card-description">API News React App</h3>
                <Button className="swipe-button">View Site</Button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              <div className="swipe-card">
                <h2 className="swipe-card-title">
                  Sample 2: Wealth Calculator
                </h2>
                <h3 className="swipe-card-description">
                  Finance Survey React App
                </h3>
                <Button className="swipe-button">View Site</Button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              <div className="swipe-card">
                <h2 className="swipe-card-title">Sample 3: Dilla Does</h2>
                <h3 className="swipe-card-description">
                  React Sole Proprietor Business Portfolio
                </h3>
                <Button className="swipe-button">View Site</Button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              <div className="swipe-card">
                <h2 className="swipe-card-title">Sample 4: E-Commerce Store</h2>
                <h3 className="swipe-card-description">
                  Shopify Drop Shipping Store
                </h3>
                <Button className="swipe-button">View Site</Button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
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
