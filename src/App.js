import "./App.css";
import { Container } from "@mui/material";
import Header from "./components/Header";
import IconList from "./components/IconList";
import BottomButtons from "./components/BottomButtons";

function App() {
  return (
    <Container sx={{ backgroundColor: "black" }}>
      <Header />
      <IconList />
      <BottomButtons />
    </Container>
  );
}

export default App;
