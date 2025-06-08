import { ProjectCard } from "./ProjectCard";

export const Wakeel: React.FC = () => (
  <ProjectCard
    title="Wakeel.com"
    avatarSrc="assets/icons/admiral.png"
    avatarAlt="CareerBuilder"
    imageSrc="assets/thumbnails/wakeel.png"
    description="Wakeel: Comparison of Car Insurances in Saudi Arabia. website provides free digital tools, independent insurance policy comparisons from trusted partner companies, and outstanding customer support."
    technologies={[
      ".Net Core",
      "MS SQL",
      "Redis",
      "Angular",
      "Team Foundation Server",
      "RabbitMQ",
    ]}
    features={[]}
    responsibilities={[
      "Requirement analyze and Client related documentation.",
      "Build and Task completions, TFS branch-code manage.",
      "Create and maintain Schema, Types, Tables and Functions on MS SQL Server.",
      "Ensures software is up-to-date with the latest technologies.",
      "Reviews and optimize code, maintain Core and data-contract libraries.",
    ]}
    additionalDescription="Project is developed based on Clean Architecture with CQRS and Angular on frontend. RabbitMQ is used to communicate within the services. Create a SSO and centralized authentication system using ASP.Net Identity. On Angular side, it render Customer Journey to ask required questions dynamically, A Quote Fetching System get quotes from the providers based on user's answers."
    role="Senior Web Engineer"
  />
);
