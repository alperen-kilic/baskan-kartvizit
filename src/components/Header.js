import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./Header.module.css";
import headerLogo from "../assets/mehmet-murat-calik.jpg";

function Header() {
  return (
    <Box
      display={"flex"}
      justifyContent="center"
      sx={{ flexDirection: "column", textAlign: 'center', alignItems:'center'}}
    >
      <img src={headerLogo} className={styles.headerLogo} alt="Logo" />
      <Typography color={"white"} variant="h4" fontWeight={"500"}>
        Mehmet Murat ÇALIK
      </Typography>
      <Typography color={"gray"} variant="body2">
        Beylikdüzü Belediye Başkanı
      </Typography>
    </Box>
  );
}

export default Header;
