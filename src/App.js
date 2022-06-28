import "./App.css";
import {
  Container,
  createTheme,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import SlComponent from "./components/SlComponent";

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
    <div></div>
      
  );
}

export default App;
