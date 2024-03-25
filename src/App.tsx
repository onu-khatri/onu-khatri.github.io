import "./App.css";
import { baseGrid } from "./App.css";
import { Box } from "./components/box/box";
import Menu from "./features/menu/menu";
import HomePage from "./pages/home/home";

function App() {
  return (
    <Box className={baseGrid} width = {'full'}>
      <Menu />
      <HomePage />
    </Box>
  );
}

export default App;
