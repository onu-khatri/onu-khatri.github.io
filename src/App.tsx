import "./App.css";
import { baseGrid } from "./App.css";
import { Box } from "./components/box/box";
import { LineTrail } from "./components/line-trail/line-trail";
import Menu from "./features/menu/menu";
import HomePage from "./pages/home/home";

function App() {
  return (
    <Box className={baseGrid} style={{width: "100%"}}>
      <>
      <LineTrail />
        <Menu />
        <HomePage />
      </>
    </Box>
  );
}

export default App;
