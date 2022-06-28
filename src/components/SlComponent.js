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
import { Typography } from "@mui/material";

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
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://www.ticicard.com/tema/icons/0/Rehberekle.png" />
          <Typography variant="overline">Rehbere Ekle</Typography>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.ticicard.com/tema/icons/0/Arama.png" />
          <Typography variant="overline">Ara</Typography>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.ticicard.com/tema/icons/0/Instagram.png" />
          <Typography variant="overline">Instagram</Typography>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.ticicard.com/tema/icons/0/Facebook.png" />
          <Typography variant="overline">Facebook</Typography>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.ticicard.com/tema/icons/0/whatsapp.png" />
          <Typography variant="overline">Whatsapp</Typography>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.ticicard.com/tema/icons/0/Twitter.png" />
          <Typography variant="overline">Twitter</Typography>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.ticicard.com/tema/icons/0/Website.png" />
          <Typography variant="overline">Web</Typography>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.ticicard.com/tema/icons/0/ytube.png" />
          <Typography variant="overline">Youtube</Typography>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
