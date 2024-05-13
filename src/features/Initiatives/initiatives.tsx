import { Box } from "../../components/box/box";
import { GitCards } from "../../components/git-card/git-card";

export const Initiatives = () => (
  <Box as="article" name="initiates">
    <h2>Open Source Projects</h2>
    <ul
      style={{
        display: "flex",
        listStyle: "none",
        columnGap: "5vw",
        justifyContent: "flex-start",
      }}
    >
      <GitCards
        title="PuppetCrawl: Web to Pdf"
        description="🔥 The service can use to render a web-page on server and perform action like web-page to pdf or snapshots etc"
        langList={[{ langClass: "TypeScript", name: "Typescript" }]}
        techTags={["NodeJS", "Express"]}
        size={2}
      ></GitCards>

      <GitCards
        title="TripYari: Travel CRM-Blog"
        description="🚀 The service can use to render a web-page on server and perform action like web-page to pdf or snapshots etc"
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
      ></GitCards>
    </ul>
  </Box>
);
