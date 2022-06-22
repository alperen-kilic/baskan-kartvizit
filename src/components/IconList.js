import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import React from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import styles from "./IconList.module.css";

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
    title: "Instagram",
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

function IconList() {
  const { height, width } = useWindowDimensions();
  const contentHeight = height - 230 > 0 ? height - 230 : 0;
  return (
    <Box className={styles.content} sx={{ height: contentHeight }}>
      <Box sx={{maxHeight: contentHeight, position: 'relative', outline:'none'}}>
        <ImageList cols={3} gap={5} sx={{ maxWidth: width }}>
          {icons.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                position="below"
                sx={{ color: "gray", textAlign: "center" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}

export default IconList;
