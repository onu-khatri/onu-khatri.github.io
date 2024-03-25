import { ArrowScroll } from "../../components/arrow-scroll/arrow-scroll";
import { Box } from "../../components/box/box";
import Typewriter, {
  TypeWriterProps,
} from "../../components/typewriter/typewriter";
import {
  highLighter,
  homeContainer,
  intro,
  intro_content,
  shadowEffect,
  typeContainer,
} from "./home.css";

const HomeLanding = () => {
  const typeWriterProps: TypeWriterProps = {
    staticContent: "I",
    staticContentClass: "typed",
    dynamicValuesClass: `${highLighter}`,
    dynamicValues: [
      {
        typeText: "Frontend solutions for websites...",
        staticBeginning: " develop ",
      },
      {
        typeText: "Backend Web Services and APIs...",
        staticBeginning: " develop ",
      },
      { typeText: "Database and Cache...", staticBeginning: " develop " },
      {
        typeText: "Cloud solutions for secure and scalable web hosting...",
        staticBeginning: " develop ",
      },
      { typeText: "Full Stack Developer.", staticBeginning: "'m " },
    ],
    typingDelay: 200,
    erasingDelay: 100,
    newTextDelay: 2000,
  };
  return (
    <Box className="row">
      <Box
        as="article"
        id="quick-into"
        className={`container ${homeContainer}`}
        aria-label="Quick Introduction"
      >
        <Box className={intro_content}>
          <h1 style={{ maxWidth: "fit-content", placeSelf: "center" }}>
            <span data-shadow="Welcome" className={shadowEffect}>
              Welcome
            </span>
            <span className={intro}>I'm Anup Singh</span>
          </h1>

          <Box style={{minWidth: "80%", placeSelf:"center"}}>
            <Box className={typeContainer}>
              <Typewriter {...typeWriterProps} />
            </Box>
            <div style={{ marginTop: "12px", fontSize: "1.1em" }}>
              Currently, working{" "}
              <span className={highLighter}>
                at{" "}
                <a
                  href="https://hiring.careerbuilder.com/"
                  style={{ all: "unset", cursor: "pointer" }}
                >
                  Careerbuilder.com
                </a>
              </span>{" "}
              as full-stack developer.
            </div>
          </Box>
        </Box>
        <ArrowScroll/>
      </Box>
    </Box>
  );
};

export default HomeLanding;
