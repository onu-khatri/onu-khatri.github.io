import { motion } from "framer-motion";
import { GitCards, type GitCardProp } from "../components/GitHubProjects";
import { H2Heading } from "../components/UI/H2Heading";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const gitCardList: GitCardProp[] = [
  {
    title: "PuppetCrawl: Web to Pdf",
    description:
      "🔥 The service can use to render a web-page on server and perform action like web-page to pdf or snapshots etc",
    langList: [{ langClass: "bg-blue-500", name: "Typescript" }],
    techTags: ["NodeJS", "Express"],
    size: "200 KB",
    url: "https://github.com/onu-khatri/Pupetter-Service",
  },
  {
    title: "TripYari: Travel CRM-Blog",
    description:
      "🚀 A travel website that provides facilities of CRM, Blog, Affiliated marketing, e-commerce and travel-search. ",
    langList: [
      { langClass: "bg-blue-500", name: "Typescript" },
      { langClass: "bg-blue-300", name: "CSS" },
      { langClass: "bg-orange-400", name: "HTML" },
      { langClass: "bg-purple-700", name: "C#" },
    ],
    techTags: [
      "CQRS",
      "Angular",
      "Clean Architecture",
      ".Net Identity",
      ".Net Core",
    ],
    size: "2.5 MB",
    url: "https://github.com/onu-khatri/TripYari",
  },
  {
    title: "DevFolio: Portfolio project",
    description:
      "🎉 A project to create online portfolio, started to learn react. Developer can use to showcase the skills and projects.",
    langList: [
      { langClass: "bg-blue-500", name: "Typescript" },
      { langClass: "bg-blue-300", name: "CSS" },
      { langClass: "bg-orange-400", name: "HTML" },
      { langClass: "bg-yellow-400", name: "JavaScript" },
    ],
    techTags: ["React", "Vite", "HeadLess-UI", "Theme"],
    size: "3.5 MB",
    url: "https://github.com/onu-khatri/onu-khatri.github.io",
  },
];

export const Initiatives = () => (
  <motion.section
    id="initiativeSection"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="my-12 scroll-mt-12"
  >
    <H2Heading>
      <GitHubLogoIcon className="w-12 h-12 inline-block mr-3" /> Open Source
      Projects
    </H2Heading>
    <ul className="flex flex-wrap justify-evenly gap-y-7 gap-x-[5vw] list-none">
      {gitCardList.map((card, index) => (
        <GitCards key={index} {...card} />
      ))}
    </ul>
  </motion.section>
);
