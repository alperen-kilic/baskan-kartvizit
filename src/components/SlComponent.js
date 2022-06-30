import React from "react";
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
import { Box } from "@mui/system";

export default function SlComponent() {
  const { height, width } = useWindowDimensions();
  const contentWidth = width - 5 > 0 ? width - 5 : 0;
  const contentHeight = height - 240 > 0 ? height - 240 : 0;
  const itemHeight = contentHeight / 3;
  const imageHeight = itemHeight - 26;
  const imageWidth = contentWidth / 3 - 10;

  const icons = [
    {
      title: "Rehber",
      img: "https://www.ticicard.com/tema/icons/0/Rehberekle.png",
      url: "https://www.google.com"
    },
    {
      title: "Arama",
      img: "https://www.ticicard.com/tema/icons/0/Arama.png",
      url: "https://www.google.com"
    },
    {
      title: "Instagram",
      img: "https://www.ticicard.com/tema/icons/0/Instagram.png",
      url: "https://www.instagram.com"
    },
    {
      title: "Facebook",
      img: "https://www.ticicard.com/tema/icons/0/Facebook.png",
      url: "https://www.facebook.com"
    },
    {
      title: "Whatsapp",
      img: "https://www.ticicard.com/tema/icons/0/whatsapp.png",
      url: "https://www.whatsapp.com"
    },
    {
      title: "Twitter",
      img: "https://www.ticicard.com/tema/icons/0/Twitter.png",
      url: "https://www.twitter.com"
    },
    {
      title: "Web",
      img: "https://www.ticicard.com/tema/icons/0/Website.png",
      url: "https://www.beylikduzu.istanbul"
    },
    {
      title: "Youtube",
      img: "https://www.ticicard.com/tema/icons/0/ytube.png",
      url: "https://www.youtube.com"
    },
  ];

  console.log(imageHeight);
  console.log(imageWidth);
  return (
    <Box
      sx={{
        height: "50vh",
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
        watchSlidesProgress={true}
        breakpoints={{
          200: {
            slidesPerView: 2,
          },
          360: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          720: {
            slidesPerView: 6,
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
            <a href={item.url} target="_blank">
              <img
                src={item.img}
                alt={item.title}
                key={item.title}
                style={{ width: "170px", height: "170px" }}
              />
              <Typography variant="overline">{item.title}</Typography>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
