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

import { Box } from "@mui/system";

export default function SlComponent() {

  const icons = [
    {
      title: "Rehber",
      img: "https://www.ticicard.com/tema/icons/0/Rehberekle.png",
      url: "https://www.dropbox.com/s/8jqx6oipa21sjsp/mehmet-murat-calik.vcf?dl=1"
    },
    {
      title: "Arama",
      img: "https://www.ticicard.com/tema/icons/0/Arama.png",
      action: "tel:4440939"
    },
    {
      title: "Instagram",
      img: "https://www.ticicard.com/tema/icons/0/Instagram.png",
      url: "https://www.instagram.com/mmuratcalik/"
    },
    {
      title: "Facebook",
      img: "https://www.ticicard.com/tema/icons/0/Facebook.png",
      url: "https://www.facebook.com/mmuratcalik/"
    },
    {
      title: "Whatsapp",
      img: "https://www.ticicard.com/tema/icons/0/whatsapp.png",
      action: "https://api.whatsapp.com/send?phone=4440939"
    },
    {
      title: "Twitter",
      img: "https://www.ticicard.com/tema/icons/0/Twitter.png",
      url: "https://twitter.com/mmuratcalik"
    },
    {
      title: "Web",
      img: "https://www.ticicard.com/tema/icons/0/Website.png",
      url: "https://www.mehmetmuratcalik.com/"
    },
    {
      title: "Youtube",
      img: "https://www.ticicard.com/tema/icons/0/ytube.png",
      url: "https://www.youtube.com/c/mmuratcalik"
    },
  ];

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
          <SwiperSlide key={item.url || item.action}>
            <a href={item.url ? item.url : "#"} target={item.url ? "_blank" : undefined} onClick={item.action ? () => {window.location.href = item.action} : undefined}>
              <img
                src={item.img}
                alt={item.title}
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
