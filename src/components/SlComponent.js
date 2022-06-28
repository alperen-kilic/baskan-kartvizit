import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function SlComponent() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://www.ticicard.com/tema/icons/0/Rehberekle.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.ticicard.com/tema/icons/0/Arama.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.ticicard.com/tema/icons/0/Instagram.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.ticicard.com/tema/icons/0/Facebook.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.ticicard.com/tema/icons/0/whatsapp.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.ticicard.com/tema/icons/0/Twitter.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.ticicard.com/tema/icons/0/Website.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.ticicard.com/tema/icons/0/ytube.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
