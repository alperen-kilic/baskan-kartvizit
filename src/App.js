import "./App.css";
import {
  Container,
  createTheme,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Header from "./components/Header";
import ContentArea from "./components/ContentArea";
import BottomButtons from "./components/BottomButtons";

const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 300,
      md: 800,
      lg: 1100,
      xl: 1500,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Header />
        <ContentArea />
        <BottomButtons />
      </Stack>
    </ThemeProvider>  
  );
}

export default App;
