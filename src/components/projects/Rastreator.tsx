import { ProjectCard } from "./ProjectCard";

export const Rastreator: React.FC = () => (
  <ProjectCard
    title="@Rastreator Comparador"
    avatarSrc="assets/icons/admiral.png"
    avatarAlt="CareerBuilder"
    imageSrc="assets/thumbnails/rastreator.png"
    description="Rastreator provide the price comparison for Car/Bike insurances, Telephony packages, Energy and Mortgages with with guaranteed prices and exclusive offers of partners."
    additionalDescription="This Rastreator project is group of multiple projects that work with different partners and
          technologies:"
    technologies={[
      ".Net Core",
      "Rest-API",
      "MS SQL",
      "RabbitMQ",
      "Azure",
      "Docker",
      "Redis",
      "Angular 17",
    ]}
    features={[
      "Car Comparison",
      "Bike Comparison",
      "Telephony Comparison",
      "Travel: Flight & Hotels",
      "Energy Plans",
      "Mortgages",
    ]}
    responsibilities={[
      "Code development for Websites and Apis in MVC, Angular, .net Core.",
      "Build and Sprint management",
      "Create Centralize tracking system.",
      "Migrate old project to new technologies.",
      "Code Review and Regular update with new technologies.",
      "Provide internal trainings to team to be sync with technologies updates and changes",
    ]}
    role="Senior Full-Stack Engineer"
  />
);
