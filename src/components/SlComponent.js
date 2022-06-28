import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Typography } from "@mui/material";

import useWindowDimensions from "../hooks/useWindowDimensions";
import { Box, display } from "@mui/system";

export default function SlComponent() {
  const { height, width } = useWindowDimensions();
  const contentWidth = width - 5 > 0 ? width - 5 : 0;
  const contentHeight = height - 240 > 0 ? height - 240 : 0;
  const itemHeight = contentHeight / 3;
  const imageHeight = itemHeight - 26;
  const imageWidth = contentWidth / 3 - 10;
  const maxSize = Math.max(imageHeight, imageWidth);

  const icons = [
    {
      title: "Rehber",
      img: "https://www.ticicard.com/tema/icons/0/Rehberekle.png",
    },
    {
      title: "Arama",
      img: "https://www.ticicard.com/tema/icons/0/Arama.png",
    },
    {
      title: "Instagram",
      img: "https://www.ticicard.com/tema/icons/0/Instagram.png",
    },
    {
      title: "Facebook",
      img: "https://www.ticicard.com/tema/icons/0/Facebook.png",
    },
    {
      title: "Whatsapp",
      img: "https://www.ticicard.com/tema/icons/0/whatsapp.png",
    },
    {
      title: "Twitter",
      img: "https://www.ticicard.com/tema/icons/0/Twitter.png",
    },
    {
      title: "Web",
      img: "https://www.ticicard.com/tema/icons/0/Website.png",
    },
    {
      title: "Youtube",
      img: "https://www.ticicard.com/tema/icons/0/ytube.png",
    },
  ];

  console.log(imageHeight);
  console.log(imageWidth);
  return (
    <Box
      sx={{
        height: `${contentHeight}px`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          200: {
            slidesPerView: 2,
          },
          360: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 25,  
          },
        }}
        coverflowEffect={{
          rotate: 5,
          stretch: 0,
          depth: 350,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {icons.map((item) => (
          <SwiperSlide>
            <img
              src={item.img}
              alt={item.title}
              key={item.title}
              style={{ width: "170px", height: "170px" }}
            />
            <Typography variant="overline">{item.title}</Typography>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
