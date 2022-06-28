import { Box, Drawer, IconButton, Typography } from "@mui/material";
import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import QrCodeIcon from '@mui/icons-material/QrCode';
function BottomButtons() {
  const [shareDrawer, setShareDrawer] = React.useState(false);
  const [qrCodeDrawer, setQrCodeDrawer] = React.useState(false);
  return (
    <Box color={"white"} display="flex" sx={{justifyContent:"center"}}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        onClick={() => setShareDrawer(true)}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <ShareIcon />
        <Typography variant="caption">Paylaş</Typography>
      </IconButton>
      <Drawer
        anchor="bottom"
        open={shareDrawer}
        onClose={() => setShareDrawer(false)}
      >
        <Box width={"100%"} textAlign="center" role="presentation">
          <Typography>Share Drawer</Typography>
        </Box>
      </Drawer>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        onClick={() => setQrCodeDrawer(true)}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <QrCodeIcon />
        <Typography variant="caption">QR Kod</Typography>
      </IconButton>
      <Drawer
        anchor="bottom"
        open={qrCodeDrawer}
        onClose={() => setQrCodeDrawer(false)}
      >
        <Box width={"100%"} textAlign="center" role="presentation">
          <Typography>QR Code Drawer</Typography>
        </Box>
      </Drawer>
    </Box>
  );
}

export default BottomButtons;
