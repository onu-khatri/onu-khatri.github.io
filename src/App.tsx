import "./App.css";
import { baseGrid, pageTopScrollBar } from "./App.css";
import { Box } from "./components/box/box";
import { LineTrail } from "./components/line-trail/line-trail";
import Menu from "./features/menu/menu";
import HomePage from "./pages/home/home";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  return (
    <>
    <motion.div
        className={pageTopScrollBar}
        style={{ scaleX }}
      />
    <Box className={baseGrid} style={{width: "100%"}}>
      <>
      <LineTrail />
        <Menu />
        <HomePage />
      </>
    </Box>
    </>
  );
}

export default App;
