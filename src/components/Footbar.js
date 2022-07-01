import {
  Alert,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Paper,
  Snackbar,
  Typography,
} from "@mui/material";
import React from "react";
import beylikduzuLogo from "../assets/beylikduzu_logo.png";
import { QrCode, Share, Close } from "@mui/icons-material";
import { QRCode } from "react-qrcode-logo";

function Footbar() {
  const [shareDrawer, setShareDrawer] = React.useState(false);
  const [qrCodeDrawer, setQrCodeDrawer] = React.useState(false);
  const [snackOpen, setSnackOpen] = React.useState(false);

  const shareData = {
    title: "Dijital Kartvizit",
    url: window.location.href
  }

  const handleSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackOpen(false);
  };

  const shareHandler = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setShareDrawer(false);
      setSnackOpen(true);
    }).catch(() => {
        alert("Bir şeyler ters gitti!");
    });
  };

  const directShareHandler = async() => {
    try {
      await navigator.share(shareData)
    } catch(err) {
    }
  }

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackClose}
      >
        <Close fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        open={snackOpen}
        autoHideDuration={2000}
        onClose={handleSnackClose}
        action={action}
      >
        <Alert
          onClose={handleSnackClose}
          severity="success"
          variant="filled"
          elevation={6}
        >
          Link Kopyalandı.
        </Alert>
      </Snackbar>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 99 }}
        elevation={3}
      >
        <BottomNavigation
          sx={{ backgroundColor: "#393939" }}
          showLabels
          onChange={(event, newValue) => {}}
        >
          <BottomNavigationAction
            sx={{ color: "white" }}
            label="Paylaş"
            icon={<Share />}
            onClick={() => setShareDrawer(true)}
          />
          <Drawer
            PaperProps={{
              square: false,
              sx: { borderRadius: "25px", maxWidth: "600px", margin: "auto" },
            }}
            anchor="bottom"
            open={shareDrawer}
            onClose={() => setShareDrawer(false)}
          >
            <Box
              width={"100%"}
              textAlign="center"
              role="presentation"
              sx={{ padding: "2rem 0" }}
            >
              <IconButton
                onClick={() => setShareDrawer(false)}
                size="large"
                sx={{ position: "absolute", right: "0", top: "0" }}
              >
                <Close fontSize="inherit" />
              </IconButton>
              <Typography variant="h3" sx={{ marginBottom: "1rem" }}>
                Kartivizitimi Paylaş
              </Typography>
              <Divider />
              <div style={{ marginTop: "2rem" }}>
                <Typography variant="body1" gutterBottom>
                  Aşağıdaki buton yardımı ile kartvizitinizin linkini
                  kopyalayarak paylaşabilirsiniz.
                </Typography>
                <Button
                  onClick={shareHandler}
                  variant="contained"
                  color="neutral"
                  sx={{ marginTop: "1rem", width: "90%" }}
                >
                  Kopyala
                </Button>
                <Button
                  onClick={directShareHandler}
                  variant="contained"
                  color="neutral"
                  sx={{ marginTop: "1rem", width: "90%" }}
                >
                  Paylaş
                </Button>
              </div>
            </Box>
          </Drawer>
          <BottomNavigationAction
            sx={{ color: "white" }}
            label="QR Kod"
            icon={<QrCode />}
            onClick={() => setQrCodeDrawer(true)}
          />
          <Drawer
            PaperProps={{
              square: false,
              sx: { borderRadius: "25px", maxWidth: "600px", margin: "auto" },
            }}
            anchor="bottom"
            open={qrCodeDrawer}
            onClose={() => setQrCodeDrawer(false)}
          >
            <Box
              width={"100%"}
              textAlign="center"
              role="presentation"
              sx={{ padding: "2rem 0" }}
            >
              <IconButton
                onClick={() => setQrCodeDrawer(false)}
                size="large"
                sx={{ position: "absolute", right: "0", top: "0" }}
              >
                <Close fontSize="inherit" />
              </IconButton>
              <Typography variant="h3" sx={{ marginBottom: "1rem" }}>
                QR Kod
              </Typography>
              <Divider />
              <div style={{ marginTop: "2rem" }}>
                <QRCode
                  value={window.location.href}
                  logoImage={beylikduzuLogo}
                  fgColor="#0BA793"
                  logoHeight={250 * 0.3}
                  logoWidth={250 * 0.3}
                  removeQrCodeBehindLogo="true"
                  eyeRadius={5}
                  size={250}
                  ecLevel="H"
                />
              </div>
            </Box>
          </Drawer>
        </BottomNavigation>
      </Paper>
    </div>
  );
}

export default Footbar;
