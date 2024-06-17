import { ReactNode } from "react";
import { ArrowScroll } from "../../components/arrow-scroll/arrow-scroll";
import { Box } from "../../components/box/box";
import Typewriter, {
  TypeWriterProps,
} from "../../components/typewriter/typewriter";
import {
  bottomText,
  devWorkImage,
  highLighter,
  homeContainer,
  intro,
  intro_content,
  subTitle,
  typeContainer,
} from "./home.css";

const HomeLanding = () => {
  const typeWriterProps: TypeWriterProps[] = [{
    staticContent: "",
    staticContentClass: "typed",
    dynamicValuesClass: `${highLighter}`,
    dynamicValues: {
        typeText: "Frontend solutions with Angular & React.",
        staticBeginning: "",
      },
    typingDelay: 100,
    startDelay: 10,
    erasingDelay: 100,
    newTextDelay: 2000,
  }, {
    staticContent: "",
    staticContentClass: "typed",
    dynamicValuesClass: `${highLighter}`,
    dynamicValues:
      {
        typeText: "Backend Web Services and APIs with .Net Core and NodeJs",
        staticBeginning: "",
      },
    typingDelay: 100,
    startDelay: 4000,
    erasingDelay: 100,
    newTextDelay: 2000,
  }, {
    staticContent: "",
    staticContentClass: "typed",
    dynamicValuesClass: `${highLighter}`,
    dynamicValues:  { typeText: "Manage Databases and Cache.", staticBeginning: "" },
    typingDelay: 100,
    startDelay: 8000,
    erasingDelay: 100,
    newTextDelay: 2000,
  }, {
    staticContent: "",
    staticContentClass: "typed",
    dynamicValuesClass: `${highLighter}`,
    dynamicValues: {
        typeText: "Cloud solutions for secure and scalable web hosting.",
        staticBeginning: "",
      },
    typingDelay: 100,
    erasingDelay: 100,
    startDelay: 11000,
    newTextDelay: 2000,
  }, {
    staticContent: "",
    staticContentClass: "typed",
    dynamicValuesClass: `${highLighter}`,
    dynamicValues: { typeText: "Full Stack Developer.", staticBeginning: "" },
    typingDelay: 100,
    startDelay: 16000,
    erasingDelay: 100,
    newTextDelay: 2000,
  }];

  const typeNodes: ReactNode[] = [];
  
  typeWriterProps.forEach((type) => {
    typeNodes.push(
        <Typewriter {...type} />
    );
  });

  return (
    <Box className="row" name="home">
      <Box
        as="article"
        id="quick-into"
        className={`container ${homeContainer}`}
        aria-label="Quick Introduction"
      >
        <Box className={intro_content}>
          

          <Box>
          <h1 style={{ maxWidth: "fit-content", placeSelf: "left", margin: 0 }}>
            <span className={intro}>Hey, I'm Anup Singh 👋</span>
          </h1>

            <span className={subTitle} >Here's a glimpse of my work:</span>
            <ul className={typeContainer}>
              {typeNodes}
            </ul>
            <div className={bottomText}>
              Currently, working{" "}
              <span style={{color: "rgb(233, 98, 105)"}}>
                at{" "}
                <a
                  href="https://hiring.careerbuilder.com/"
                  style={{ all: "unset", cursor: "pointer", color: "#e96269" }}
                >
                  Careerbuilder.com
                </a>
              </span>{" "}
              as full-stack developer.
            </div>
          </Box>
          <div className={devWorkImage}>
          <img src="/thumbnails/working-dev-10.svg" style={{width: "100%", height: "100%"}}/>
        </div>
        </Box>        
        <ArrowScroll/>
      </Box>
    </Box>
  );
};

export default HomeLanding;
