import * as React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import { TypingList } from "./TypingList";
import { DownloadIcon } from "@radix-ui/react-icons";

export const DeveloperIntro: React.FC<{ className: string }> = ({
  className,
}) => {
  return (
    <div
      className={`flex flex-col items-center text-center sm:px-6 rounded-lg drop-shadow-[0_0_6px_3px_rgba(0,0,0,0.3)] w-full max-h-fit bg-[hsl(var(--background))] sm:min-w-1/2 ${className}`}
    >
      {/* Avatar using Radix */}
      <Avatar.Root className="w-32 h-32 md:w-40 md:h-40 rounded-full ring-4 ring-primary/50 dark:ring-primary/60 shadow-xl overflow-hidden hover:scale-105 hover:brightness-110 transition-transform duration-300">
        <Avatar.Image
          src="assets/thumbnails/My-face-2.png"
          alt="Anup Singh"
          className="w-full h-full object-cover"
        />
        <Avatar.Fallback
          delayMs={400}
          className="flex items-center justify-center w-full h-full bg-muted text-muted-foreground font-semibold text-3xl uppercase"
        >
          AS
        </Avatar.Fallback>
      </Avatar.Root>

      {/* Name */}
      <h1 className="text-2xl sm:text-5xl font-bold text-foreground dark:text-foreground mt-4">
        Anup Singh
      </h1>

      {/* Title */}
      <p className="text-base sm:text-base sm:text-lg mt-3 font-medium text-muted-foreground dark:text-muted-foreground">
        Senior Full Stack Developer
      </p>
      {/* Highlights List */}
      <TypingList
        className="mt-10 min-h-[13rem] 2xl:min-h-[30rem] w-full p-5"
        items={[
          "⚛️ Craft Modern Frontend Solutions using Angular and React to build responsive, accessible, and user-centric interfaces.",
          "🛠️ Design and Develop Scalable Backend APIs with .NET Core and Node.js (NestJS, NextJS), enabling seamless integrations and efficient data handling.",
          "🗄️ Manage Databases & Caching Layers across MS SQL, PostgreSQL, Redis, and Memcached to ensure fast, reliable application performance.",
          "☁️ Architect Secure & Scalable Cloud Solutions using AWS, Docker, and IIS for optimized deployment and web hosting.",
          "👨‍💻 Full Stack Engineer @MonsterCareer (formerly CareerBuilder) with 12+ years of experience delivering end-to-end solutions, leading teams, and driving innovation across industries.",
        ]}
        keepPrevious={true}
        typingSpeed={30}
        pauseBetweenItems={100}
      />
      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <a
          href="assets/docs/Anup-Singh-Resume.pdf"
          download
          className="relative inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-blue-600 dark:border-amber-200 text-blue-600 dark:text-amber-200 font-semibold overflow-hidden group hover:bg-blue-600 dark:hover:bg-amber-200 hover:text-white dark:hover:text-black transition duration-300 ease-in-out"
        >
          <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left bg-blue-600 dark:bg-amber-200 transition-transform duration-300 ease-in-out z-0" />
          <DownloadIcon className="w-5 h-5 relative z-10" />
          <span className="relative z-10">Download Resume</span>
        </a>
      </div>
    </div>
  );
};
