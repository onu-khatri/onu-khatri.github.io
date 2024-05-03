import { Box } from "../../components/box/box";
import { projectContainer } from "./projects.css";
import { TdpP4P } from "./tdp-p4p";
import { TdpProject } from "./tdp-project";


const Projects = () => {
  return (
    <Box className="row" name="projects">
      <h2 style={{marginBottom: "64px"}}>Projects</h2>
      <Box
        as="article"
        id="quick-into"
        className={`container ${projectContainer}`}
        aria-label="Projects"
      >
        <TdpProject></TdpProject>
        <TdpP4P></TdpP4P>
      </Box>
    </Box>
  );
};

export default Projects;
