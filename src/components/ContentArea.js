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
  const contentHeight = height - 230 > 0 ? height - 230 : 0;
  const itemHeight = contentHeight / 3;
  const imageHeight = itemHeight - 26;
  const imageWidth = contentWidth / 3 - 10;
  return (
    <Grid container>
      {icons.map((item) => (
        <Grid item xs={4}>
          <ImageListItem>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        </Grid>
      ))}
    </Grid>
  );
}

export default ContentArea;
