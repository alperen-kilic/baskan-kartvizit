import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import headerAvatar from "../assets/mehmet-murat-calik.jpg";

function Header() {
  return (
    <Box
      sx={{
        position: "fixed !important",
        top: 0,
        left: 0,
        right: 0,
        paddingTop: "10px",
        minHeight: "170px",
        height: "170px",
        display: "flex",
        textAlign:"center",
        transition:"all 350ms ease",
        marginBottom:"0",
        boxSizing:"border-box",
        margin:"0 auto",
        maxWidth:"600px",
        backgroundSize:"cover",
        border:"0 !important",
        maxHeight: "150000px",
        marginBottom:"30px",
        backgroundPosition:"center center!important",
        flexDirection:"column",
        minWidth:"0",
        wordWrap:"break-word",
        borderRadius:"0.25rem",
        alignItems:"center"
      }}
    >
      <Avatar src={headerAvatar} sx={{ width: 73, height: 73, display:{xxs:'none', xs:'block'} }} />
      <Typography color="#1B76BC" variant="h6" sx={{lineHeight:"35px"}}>
        Mehmet Murat ÇALIK
      </Typography>
      <Typography variant="body2" sx={{marginBottom:"5px", marginTop:"-5px"}}>
        Beylikdüzü Belediye Başkanı
      </Typography>
    </Box>
  );
}

export default Header;
