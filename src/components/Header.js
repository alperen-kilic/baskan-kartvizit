import { Avatar, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import headerAvatar from "../assets/mehmet-murat-calik.jpg";

function Header() {
  return <Box textAlign={"center"} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
    <Avatar src={headerAvatar} sx={{width:95, height:95, marginTop:"10px"}}/>
    <Typography variant="h6" color="white">Mehmet Murat ÇALIK</Typography>
    <Typography variant="body2" color="gray">Beylikdüzü Belediye Başkanı</Typography>
  </Box>;
}

export default Header;
