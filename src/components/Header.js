import {
  Avatar,
  Divider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import headerAvatar from "../assets/mehmet-murat-calik.jpg";
import headerAvatar2 from "../assets/mm-calik.jpg";

function Header() {
  return (
    <Box
      textAlign={"center"}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        src={headerAvatar2}
        sx={{
          width: { xxs: 110, lg: 160 },
          height: { xxs: 110, lg: 160 },
          marginTop: "15px",
          marginBottom: "10px",
        }}
      />
      <Typography variant="h4" color="white" gutterBottom sx={{typography: { xxs: "h4", md: "h3"}}}>
        Mehmet Murat{" "}
        <span>
          <b>ÇALIK</b>
        </span>
      </Typography>
      <Divider
        sx={{ background: "gray", width: "60%", marginBottom: "0.25rem" }}
        variant="middle"
      />
      <Typography variant="body2" color="#c9c9c9" sx={{typography: { xxs: "body2", md: "h6"}, fontWeight: {md: 300}}}>
        Beylikdüzü Belediye Başkanı
      </Typography>
    </Box>
  );
}

export default Header;
