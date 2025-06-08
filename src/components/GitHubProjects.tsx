import { CubeIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import React from "react";
import { H2Heading } from "./UI/H2Heading";
import { motion } from "framer-motion";

interface GitCardProp {
  className?: string;
  titleContainerClass?: string;
  contentContainerClass?: string;
  title: string;
  description: string;
  langList: { name: string; langClass: string }[];
  size: string;
  techTags: string[];
  url: string;
  children?: React.ReactNode;
}

export const GitCards = (props: GitCardProp) => {
  return (
    <li className="m-3 w-full sm:max-w-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-lg dark:shadow-md transition-colors">
      <a
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-6 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-2xl transition w-full h-full"
      >
        <h3 className="flex items-center gap-3 border-b border-zinc-300 dark:border-zinc-700 pb-2 text-xl font-semibold text-zinc-800 dark:text-zinc-100">
          <CubeIcon className="w-6 h-6 text-primary" />
          {props.title}
        </h3>

        <p className="text-zinc-600 dark:text-zinc-300 text-base mt-4 mb-6 leading-relaxed text-justify">
          {props.description}
        </p>

        <div className="grid grid-cols-[1fr_40px] justify-between items-baseline mb-6 gap-4">
          <ul className="flex flex-wrap items-center gap-3">
            {props.langList.map((lang, index) => (
              <li key={index} className="text-base flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full ${lang.langClass}`}
                ></span>
                <span className="text-zinc-700 dark:text-zinc-300">
                  {lang.name}
                </span>
              </li>
            ))}
          </ul>
          <div className="text-sm text-zinc-500 dark:text-zinc-400">
            {props.size}
          </div>
        </div>

        <ul className="flex flex-wrap gap-2 text-base">
          {props.techTags.map((tag, index) => (
            <li
              key={index}
              className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 px-2 py-1 rounded-md"
            >
              #{tag}
            </li>
          ))}
        </ul>
      </a>
    </li>
  );
};

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
      <GitCards
        title="PuppetCrawl: Web to Pdf"
        description="🔥 The service can use to render a web-page on server and perform action like web-page to pdf or snapshots etc"
        langList={[{ langClass: "bg-blue-500", name: "Typescript" }]}
        techTags={["NodeJS", "Express"]}
        size="200 KB"
        url="https://github.com/onu-khatri/Pupetter-Service"
      />

      <GitCards
        title="TripYari: Travel CRM-Blog"
        description="🚀 A travel website that provides facilities of CRM, Blog, Affiliated marketing, e-commerce and travel-search. "
        langList={[
          { langClass: "bg-blue-500", name: "Typescript" },
          { langClass: "bg-blue-300", name: "CSS" },
          { langClass: "bg-orange-400", name: "HTML" },
          { langClass: "bg-purple-700", name: "C#" },
        ]}
        techTags={[
          "CQRS",
          "Angular",
          "Clean Architecture",
          ".Net Identity",
          ".Net Core",
        ]}
        size="2.5 MB"
        url="https://github.com/onu-khatri/TripYari"
      />

      <GitCards
        title="DevFolio: Portfolio project"
        description="🎉 A project to create online portfolio, started to learn react. Developer can use to showcase the skills and projects."
        langList={[
          { langClass: "bg-blue-500", name: "Typescript" },
          { langClass: "bg-blue-300", name: "CSS" },
          { langClass: "bg-orange-400", name: "HTML" },
          { langClass: "bg-yellow-400", name: "JavaScript" },
        ]}
        techTags={["React", "Vite", "HeadLess-UI", "Theme"]}
        size="3.5 MB"
        url="https://github.com/onu-khatri/onu-khatri.github.io"
      />
    </ul>
  </motion.section>
);
