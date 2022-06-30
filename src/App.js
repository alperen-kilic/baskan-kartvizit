import "./App.css";
import {
  Container,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import SlComponent from "./components/SlComponent";
import Header from "./components/Header";
import Footbar from "./components/Footbar";

var theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 300,
      md: 800,
      lg: 1024,
      xl: 1500,
    },
  },
  palette: {
    neutral: {
      main: '#0BA793',
      contrastText: '#fff',
    }
  },
  typography: {
    body1: {
      fontFamily: "'Open Sans', sans-serif",
      fontWeight: 500,
    },
    body2: {
      fontFamily: "'Open Sans', sans-serif",
      fontWeight: 500,
    },
    h1: {
      fontFamily: "'Open Sans', sans-serif",
    },
    h2: {
      fontFamily: "'Open Sans', sans-serif",
      fontWeight: 600,
    },
    h3: {
      fontFamily: "'Open Sans', sans-serif",
      fontWeight: 300,
    },
    h4: {
      fontFamily: "'Open Sans', sans-serif",
      fontWeight: 300,
    },
    h5: {
      fontFamily: "'Open Sans', sans-serif",
      fontWeight: 300,
    },
    h6: {
      fontFamily: "'Open Sans', sans-serif",
      fontWeight: 400,
    },
    overline: {
      fontFamily: "'Open Sans', sans-serif",
      fontWeight: 800,
    },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ padding: "0 !important" }}>
        <Header />
        <SlComponent />
        <Footbar />
      </Container>
    </ThemeProvider>
  );
}

export default App;
