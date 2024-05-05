import { Box } from "../../components/box/box";
import { projectContainer } from "./projects.css";
import { TdpP4P } from "./tdp-p4p";
import { TdpProject } from "./tdp-project";
import { AdmiralTravel } from "./vuelos";
import { Wakeel } from "./wakeel";
import { Rastreator } from "./rastreator";

const Projects = () => {
  return (
    <Box as="article" className="row" name="projects">
      <h2 style={{marginBottom: "32px", marginTop: "auto"}}>Top 6 Projects:</h2>
      <div style={{display: "flex", flexDirection: "row"}}>
      <div        
        id="quick-into"
        className={`container ${projectContainer}`}
        aria-label="Projects"
      >
        <TdpProject></TdpProject>
        <TdpP4P></TdpP4P>
        <Wakeel></Wakeel>
        <Rastreator></Rastreator>
        <AdmiralTravel></AdmiralTravel>
      </div>
      </div>
    </Box>
  );
};

export default Projects;
