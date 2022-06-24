import "./App.css";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import ContentArea from "./components/ContentArea";
import ContentCard from "./components/ContentCard";

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
    <div>
      <ThemeProvider theme={theme}>
        <ContentCard />
      </ThemeProvider>
    </div>
  );
}

export default App;
