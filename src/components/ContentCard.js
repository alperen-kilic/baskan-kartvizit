import { Box } from "@mui/material";
import React from "react";
import ContentArea from "./ContentArea";
import Header from "./Header";

function ContentCard() {
  return (
    <Box
      sx={{
        position:"fixed",
        top:0,
        left:0,
        right:0,
        paddingTop:"10px",
        backgroundColor:"rgb(197, 184, 3)",
        minHeight:"100%",
        height:"100%",
        display:"flex",
        textAlign:"center",
        transition:"all 350ms ease",
        marginBottom:"0",
        boxSizing:"border-box",
        margin:"0 auto",
        maxWidth:"600px"
      }}
    >
      <Header />
      <ContentArea />
    </Box>
  );
}

export default ContentCard;
