import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import headerAvatar from "../assets/mehmet-murat-calik.jpg";

function Header() {
  return (
    <Box
      sx={{
        paddingTop:"10px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        textAlign:"center",
        wordBreak:"break-word"
      }}
    >
      <Avatar
        alt="Mehmet Murat Çalık"
        src={headerAvatar}
        sx={{ width: { xs: 56, sm: 128 }, height: { xs: 56, sm: 128 } }}
      />
      <Typography variant="h6" color="white">
        Mehmet Murat ÇALIK
      </Typography>
      <Typography variant="body2" color="gray">
        Beylikdüzü Belediye Başkanı
      </Typography>
    </Box>
  );
}

export default Header;
