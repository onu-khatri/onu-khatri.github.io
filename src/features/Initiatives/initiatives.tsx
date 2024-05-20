import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Box } from "../../components/box/box";
import { GitCards } from "../../components/git-card/git-card";

export const Initiatives = () => (
  <Box as="article" name="initiates">
    <h2><GitHubLogoIcon style={{width: "24px", height: "24px"}}/>&nbsp;&nbsp;Open Source Projects</h2>
    <ul
      style={{
        display: "flex",
        listStyle: "none",
        columnGap: "5vw",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        rowGap: "28px"
      }}
    >
      <GitCards
        title="PuppetCrawl: Web to Pdf"
        description="🔥 The service can use to render a web-page on server and perform action like web-page to pdf or snapshots etc"
        langList={[{ langClass: "TypeScript", name: "Typescript" }]}
        techTags={["NodeJS", "Express"]}
        size={2}
        url="https://github.com/onu-khatri/Pupetter-Service"
      ></GitCards>

      <GitCards
        title="TripYari: Travel CRM-Blog"
        description="🚀 A travel website that provides facilities of CRM, Blog, Affiliated marketing, e-commerce and travel-search. "
        langList={[
          { langClass: "TypeScript", name: "Typescript" },
          { langClass: "CSS", name: "CSS" },
          { langClass: "HTML", name: "HTML" },
          { langClass: "C-Sharp", name: "C#" },
        ]}
        techTags={[
          "CQRS",
          "Clean Architecture",
          ".Net Identity",
          ".Net Core",
          "Angular",
        ]}
        size={2}
        url="https://github.com/onu-khatri/TripYari"
      ></GitCards>

      <GitCards
        title="DevFolio: Portfolio project"
        description="🎉 A project to create online portfolio, started to learn react. Developer can use to showcase the skills and projects."
        langList={[
          { langClass: "TypeScript", name: "Typescript" },
          { langClass: "CSS", name: "CSS" },
          { langClass: "HTML", name: "HTML" },
          { langClass: "JavaScript", name: "JavaScript" },
        ]}
        techTags={["React", "Vite", "HeadLess-UI", "Theme"]}
        size={2}
        url="https://github.com/onu-khatri/onu-khatri.github.io"
      ></GitCards>
    </ul>
  </Box>
);
