import { ProjectCard } from "./ProjectCard";

export const TalentDiscoveryCard: React.FC = () => (
  <ProjectCard
    title="Talent Discovery Platform"
    avatarSrc="assets/icons/cb.png"
    avatarAlt="CareerBuilder"
    imageSrc="assets/thumbnails/TDP-thumb.jpg"
    description="TDP provides solutions and services to employers and recruiters. Recruiters can perform semantic search for candidates, send messages, manage jobs, and clients can also add candidates to their ATS."
    additionalDescription="This project is a group of multiple sub-projects that work on different technologies:"
    technologies={[
      "NodeJs",
      "NestJs",
      ".Net Core",
      "Rest-API",
      "S3",
      "Lambda",
      "SNS",
      "SQS",
      "MySql",
      "MS SQL",
      "Github",
      "Jenkin",
      "Docker",
      "Redis",
      "Angular 17",
    ]}
    features={[
      "Home Page",
      "Messages",
      "Candidate Search",
      "Search Settings",
      "Candidate Detail",
      "Job Posting",
      "Campaign",
      "Analytics",
    ]}
    responsibilities={[
      "Develop and maintain frontend and backend based on micro design.",
      "Create Lambda Functions, SNS Topics, and SQS Listeners",
      "Create and maintain Schema, Types, Tables and Functions on PostgreSQL DB.",
      "Reviews and optimize code, collaborates with internal teams.",
      "Ensures software is up-to-date with the latest technologies.",
      "Provide technical guidance, mentorship to the team members",
    ]}
    role="Senior Full-Stack Engineer"
  />
);
