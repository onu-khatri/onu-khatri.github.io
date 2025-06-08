import { ProjectCard } from "./ProjectCard";

export const AdmiralTravel: React.FC = () => (
  <ProjectCard
    title="@Rastreator-Vuelos"
    avatarSrc="assets/icons/admiral.png"
    avatarAlt="CareerBuilder"
    imageSrc="assets/thumbnails/Vuelos.png"
    description="Vuelos: is a search page to find the hotels, flights, rent-cars and travel insurance. Page redirects users to the Booking.com and Kayak.com as per their selected dates and destinations. Vuelos is best example to expand business with Affiliated marketing."
    technologies={[".Net Core", "Redis", "React", "MS SQL Server"]}
    additionalDescription="Viajes is a project of Rastreator, to provide dynamic links and to gather data of the user who want to travel in Spain. This project helps Rastreator to start a Affiliated-marketing based project and increase the SEO-links and visibility at search engine indexes."
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
      "Requirement analyze and Client related documentation.",
      "Build and Task completions, TFS branch-code manage",
      "Create and maintain Schema, Types, Tables and Functions on MS SQL Server.",
      "Ensures software is up-to-date with the latest technologies.",
      "Reviews and optimize code, maintain the JS libraries.",
    ]}
    role="Associate Software Engineer"
  />
);
