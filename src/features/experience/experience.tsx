import { Box } from "../../components/box/box";
import ExperienceTabs from "../../components/experience-tab/experience-tab";
import TimeLineContainer from "../../components/time-line/time-line-container/time-line-container";
import TimeLineItem from "../../components/time-line/time-line-item/time-line-item";
import { experienceRoot } from "./experience.css";

export default function Experience() {
  return (
    <Box className={`row ${experienceRoot}`} as="article">
      <h2>Experience</h2>
      <ExperienceTabs/>

      <TimeLineContainer>
        <TimeLineContainer.item>
          <TimeLineItem.icon alt="Aptara"></TimeLineItem.icon>
          <Box>
            Anup Singh
          </Box>
        </TimeLineContainer.item>
        <TimeLineContainer.item>
          <TimeLineItem.icon alt="Career"></TimeLineItem.icon>
          <Box>
            Anup Singh 2
          </Box>
        </TimeLineContainer.item>
      </TimeLineContainer>
    </Box>
  )
} 