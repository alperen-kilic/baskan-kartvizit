import {
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import SingleCard from "./SingleCard";

const icons = [
  {
    title: "Rehbere Ekle",
    img: "https://www.ticicard.com/tema/icons/0/Rehberekle.png",
  },
  { title: "Ara", img: "https://www.ticicard.com/tema/icons/0/Arama.png" },
  {
    title: "Instagram",
    img: "https://www.ticicard.com/tema/icons/0/Instagram.png",
  },
  {
    title: "Facebook",
    img: "https://www.ticicard.com/tema/icons/0/Facebook.png",
  },
  {
    title: "Instagram 2",
    img: "https://www.ticicard.com/tema/icons/0/Instagram.png",
  },
  {
    title: "Whatsapp",
    img: "https://www.ticicard.com/tema/icons/0/whatsapp.png",
  },
  {
    title: "Twitter",
    img: "https://www.ticicard.com/tema/icons/0/Twitter.png",
  },
  { title: "Web", img: "https://www.ticicard.com/tema/icons/0/Website.png" },
  { title: "Youtube", img: "https://www.ticicard.com/tema/icons/0/ytube.png" },
];

function ContentArea() {
  const { height, width } = useWindowDimensions();
  const contentWidth = width - 5 > 0 ? width - 5 : 0;
  const contentHeight = height - 240 > 0 ? height - 240 : 0;
  const itemHeight = contentHeight / 3;
  const imageHeight = itemHeight - 26;
  const imageWidth = contentWidth / 3 - 10;
  return (
    <ImageList sx={{ width: `${contentWidth}px`, height:`${contentHeight}px` }} cols={3} rowHeight={itemHeight}>
      {icons.map((item) => (
        <ImageListItem key={item.img} sx={{width:"55px"}}>
          <img
            src={`${item.img}`}
            srcSet={`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default ContentArea;
