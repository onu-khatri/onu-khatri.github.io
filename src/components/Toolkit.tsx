import { DesktopIcon } from "@radix-ui/react-icons";
import { H2Heading } from "./UI/H2Heading";
import CSharpIcon from "../assets/icons/c-sharp-logo.svg?react";
import DotNetIcon from "../assets/icons/dotnet-core.svg?react";
import GrpcIcon from "../assets/icons/grpc.svg?react";
import rabbitMQIcon from "../assets/icons/rabbitmq.svg?react";
import nodeJsIcon from "../assets/icons/nodejs.svg?react";

import awsIcon from "../assets/icons/aws.svg?react";
import dockerIcon from "../assets/icons/docker.svg?react";
import mysqlIcon from "../assets/icons/mysql-svgrepo-com.svg?react";
import postgresqlIcon from "../assets/icons/postgresql-logo-svgrepo-com.svg?react";

import sqlIcon from "../assets/icons/sql-database-generic-svgrepo-com.svg?react";
import redisIcon from "../assets/icons/redis.svg?react";

import typescriptIcon from "../assets/icons/typescript.svg?react";
import angularIcon from "../assets/icons/angular.svg?react";
import reactIcon from "../assets/icons/react.svg?react";
import javascriptIcon from "../assets/icons/javascript.svg?react";
import css3Icon from "../assets/icons/css3.svg?react";
import html5Icon from "../assets/icons/html5.svg?react";
import sassIcon from "../assets/icons/sass-avatar.svg?react";
import gdprIcon from "../assets/icons/gdpr.svg?react";
import accessibilityIcon from "../assets/icons/accessibility.svg?react";
import githubIcon from "../assets/icons/github.svg?react";
import springBootIcon from "../assets/icons/spring-boot.svg?react";
import nextjsIcon from "../assets/icons/nextjs.svg?react";
import { motion } from "framer-motion";

const skills = {
  Backend: [
    { name: ".NET Core", icon: DotNetIcon, level: 9 },
    { name: "C#", icon: CSharpIcon, level: 9 },
    { name: "Node-JS", icon: nodeJsIcon, level: 7 },
    { name: "Spring Boot", icon: springBootIcon, level: 3 },
    { name: "Next-JS", icon: nextjsIcon, level: 3 },
    { name: "GRPC", icon: GrpcIcon, level: 4 },
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: awsIcon, level: 7 },
    { name: "Docker", icon: dockerIcon, level: 3 },
    { name: "GitHub", icon: githubIcon, level: 5 },
    { name: "RabbitMQ", icon: rabbitMQIcon, level: 6 },
  ],
  Databases: [
    { name: "SQL", icon: sqlIcon, level: 7 },
    { name: "PostgreSql", icon: postgresqlIcon, level: 5 },
    { name: "MySql", icon: mysqlIcon, level: 7 },
    { name: "Redis", icon: redisIcon, level: 7 },
  ],
  Frontend: [
    { name: "Angular", icon: angularIcon, level: 9 },
    { name: "React", icon: reactIcon, level: 7 },
    { name: "Javascript", icon: javascriptIcon, level: 8 },
    { name: "Typescript", icon: typescriptIcon, level: 9 },
    { name: "Saas", icon: sassIcon, level: 7 },
    { name: "CSS 3", icon: css3Icon, level: 7 },
    { name: "HTML 5", icon: html5Icon, level: 7 },
  ],
  Other: [
    {
      name: "Accessibility",
      icon: accessibilityIcon,
      level: 7,
    },
    { name: "GDPR", icon: gdprIcon, level: 5 },
  ],
};

export const Toolkit = () => {
  return (
    <motion.section
      id="toolKitSection"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full sm:px-8 mt-16 scroll-mt-12"
    >
      <H2Heading>
        <span className="inline-block">My ToolKit</span>
        <DesktopIcon height={25} width={25} className="ml-5 inline-block" />
      </H2Heading>

      <div className="space-y-10 px-4 text-base sm:text-lg font-medium text-neutral-900 dark:text-gray-100">
        {Object.entries(skills).map(([group, items]) => (
          <div
            key={group}
            className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6"
          >
            {/* Group Name */}
            <div className="w-36 shrink-0 text-neutral-700 dark:text-gray-200 text-lg font-semibold pt-2">
              {group}:
            </div>

            {/* Skills Grid */}
            <div className="flex flex-wrap gap-4">
              {items.map(({ name, icon: Icon, level }) => (
                <div
                  key={name}
                  className="flex flex-col items-center bg-neutral-100 dark:bg-neutral-800 rounded-xl py-2 px-2 w-32 sm:w-24 shadow hover:shadow-md transition-shadow"
                >
                  <Icon className="w-10 h-10 text-blue-600 dark:text-white" />

                  <span className="text-sm text-center text-neutral-800 dark:text-gray-100">
                    {name}
                  </span>

                  {/* Level Bar */}
                  <div className="w-full mt-2">
                    <div className="h-1.5 bg-neutral-300 dark:bg-neutral-600 rounded">
                      <div
                        className="h-1.5 rounded"
                        style={{
                          width: `${level * 10}%`,
                          backgroundColor:
                            level >= 8
                              ? "#22c55e" // green
                              : level >= 5
                              ? "#facc15" // yellow
                              : "#f87171", // red
                        }}
                      />
                    </div>
                    <div className="text-xs text-center mt-1 text-gray-500 dark:text-gray-300">
                      {level >= 8
                        ? "Expert"
                        : level >= 5
                        ? "Advanced"
                        : "Intermediate"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};
