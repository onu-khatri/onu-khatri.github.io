import { useRef } from "react";
import { Box } from "../../components/box/box";
import Experience from "../../features/experience/experience";
import HomeLanding from "../../features/home/home";
import { Introduction } from "../../features/intoduction/introduction";
import { homeContainer } from "./home.css";
import Projects from "../../features/projects/projects";

export default function HomePage() {
  
  const elementRef = useRef<HTMLElement>(null);
  
  return (
    <Box className={`container ${homeContainer}`} ref={elementRef}>
        <HomeLanding />
        <Introduction />
        <Experience />
        <Projects />
    </Box>
  )
} 