export const developerInfo = {
  name: "Anup Singh",
  title: "Senior Full Stack Developer",
  avatar: {
    src: "assets/thumbnails/My-face-2.png",
    alt: "Anup Singh",
    fallback: "AS",
  },
  typingItems: [
    "⚛️ Craft Modern Frontend Solutions using Angular and React to build responsive, accessible, and user-centric interfaces.",
    "🛠️ Design and Develop Scalable Backend APIs with .NET Core and Node.js (NestJS, NextJS), enabling seamless integrations and efficient data handling.",
    "🗄️ Manage Databases & Caching Layers across MS SQL, PostgreSQL, Redis, and Memcached to ensure fast, reliable application performance.",
    "☁️ Architect Secure & Scalable Cloud Solutions using AWS, Docker, and IIS for optimized deployment and web hosting.",
    "👨‍💻 Full Stack Engineer @MonsterCareer (formerly CareerBuilder) with 12+ years of experience delivering end-to-end solutions, leading teams, and driving innovation across industries.",
  ],
  resume: {
    url: "assets/docs/Anup-Singh-Resume.pdf",
    label: "Download Resume",
  },
};

export type DeveloperIntroProps = {
  className: string;
  developer: typeof developerInfo;
};
