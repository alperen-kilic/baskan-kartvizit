import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

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
  const contentWidth = width - 50 > 0 ? width - 50 : 0;
  const contentHeight = height - 230 > 0 ? height - 230 : 0;
  var T2imgHeight = (height - 130) / 3 - 26;
  var T2imgWidth = width / 3 - 20;
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {icons.map((item) => (
            <ImageListItem key={item.title}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
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

export default ContentArea;
