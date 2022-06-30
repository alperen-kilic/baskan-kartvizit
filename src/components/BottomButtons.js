import { Box, Drawer, IconButton, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import QrCodeIcon from '@mui/icons-material/QrCode';

function BottomButtons() {
  const [shareDrawer, setShareDrawer] = React.useState(false);
  const [qrCodeDrawer, setQrCodeDrawer] = React.useState(false);
  return (
    <Stack color={"white"} direction="row">
      <Paper elevation={3}>
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
      </Paper>
      <Drawer
        anchor="bottom"
        open={shareDrawer}
        onClose={() => setShareDrawer(false)}
      >
        <Box width={"100%"} textAlign="center" role="presentation">
          <Typography>Share Drawer</Typography>
        </Box>
      </Drawer>
      <Paper elevation={3}>
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
      </Paper>
      <Drawer
        anchor="bottom"
        open={qrCodeDrawer}
        onClose={() => setQrCodeDrawer(false)}
      >
        <Box width={"100%"} textAlign="center" role="presentation">
          <Typography>QR Code Drawer</Typography>
        </Box>
      </Drawer>
    </Stack>
  );
}

export default BottomButtons;
