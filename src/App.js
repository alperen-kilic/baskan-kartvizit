import "./App.css";
import {
  Container,
  createTheme,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import SlComponent from "./components/SlComponent";
import Header from "./components/Header";
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
    <Container sx={{padding:"0"}}>
      <Header/>
      <SlComponent />
      <BottomButtons />
    </Container>
      
  );
}

export default App;
