import { Avatar } from "@radix-ui/react-avatar";
import { Box } from "../../components/box/box";
import FlipCard from "../../components/flip-card/flip-card";
import FrontSide from "../../components/flip-card/front-side";
import AvatarImage from "../../components/avatar/avatar";
import { companyCardLogo, headerImageContainer as headerImageStyle } from "./projects.css";


const Projects = () => {
  return (
    <Box className="row">
      <Box
        as="article"
        id="quick-into"
        className={`container `}
        aria-label="Projects"
      >
        <FlipCard>
          <AvatarImage isSquare='true' alt="CareerBuilder" className={companyCardLogo} 
            src="icons/cb.png"></AvatarImage>

          <FlipCard.frontSide>
            <FrontSide.headerImage imageClass={headerImageStyle} src="thumbnails/TDP-thumb.jpg" />
            <h3>Talent Discovery Platform</h3>
          </FlipCard.frontSide>

          <FlipCard.backSide>
            <div>
              <h3>This is back Side of the Card</h3>
            </div>
          </FlipCard.backSide>
        </FlipCard>
      </Box>
    </Box>
  );
};

export default Projects;
