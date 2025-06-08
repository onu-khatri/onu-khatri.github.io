import { ProjectCard } from "./ProjectCard";

export const TdpP4P: React.FC = () => (
  <ProjectCard
    title="Pay For Performance"
    avatarSrc="assets/icons/cb.png"
    avatarAlt="CareerBuilder"
    imageSrc="assets/thumbnails/p4p.png"
    description="P4P model offers a more flexible way to advertise all client jobs, and is designed to align what client pay with what we deliver. When client qualify, client only spend when candidates apply to their positions."
    technologies={[
      ".Net Core",
      "Rest-API",
      "Lambda",
      "SNS",
      "Postgresql",
      "Github",
      "Jenkin",
      "Docker",
      "Redis",
      "Angular 17",
    ]}
    additionalDescription="Project is developed with micro-front end and microservices design. It uses AWS Lambda, SQS and SNS for the communication between the services."
    responsibilities={[
      "Develop and maintain project with high quality code practices from front-end to back-end.",
      "Maintain project deployment on different environments with CI/CD and AWS Cloud.",
      "Reviews and debugs code, collaborates with internal teams.",
      "Ensures software is up-to-date with the latest technologies.",
      "Provide technical guidance, mentorship to deliver successful software projects.",
    ]}
    role="Senior Full-Stack Engineer"
  />
);
