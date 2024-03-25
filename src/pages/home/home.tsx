import { Box } from "../../components/box/box";
import HomeLanding from "../../features/home/home";
import { Introduction } from "../../features/intoduction/introduction";
import { homeContainer } from "./home.css";

export default function HomePage() {
  return (
    <Box className={`container ${homeContainer}`} width={'full'} flex={'2'} aria-label="Main Page">
        <HomeLanding />
        <Introduction />
    </Box>
  )
} 