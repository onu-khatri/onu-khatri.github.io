import { ProjectCard } from "./ProjectCard";

export const UkCycle: React.FC = () => (
  <ProjectCard
    title="UK Cycle-Learning"
    avatarSrc="assets/icons/E2E.png"
    avatarAlt="CareerBuilder"
    imageSrc="assets/thumbnails/cycleTraining.png"
    description="cycletraining.spa-portal.co.uk is a light-weight web portal which enable cycle-teaching organizations of London to register their users online as well as track performance. This project also handle a survey to decide the learning-level of the user"
    additionalDescription="This project is group of multiple projects that work with different technologies:"
    technologies={[".Net Core", "MS SQL", "IIS Server", "React", "D3.JS"]}
    features={[
      "Survey",
      "CMR portal",
      "Candidate attendance tracker",
      "User profile and history",
      "Training Tracker",
      "Training certificate manager",
      "Analytics",
    ]}
    responsibilities={[
      "Develop and maintain project with high quality code practices from front-end to back-end.",
      "Reviews and debugs code, collaborates with internal teams.",
      "Expanded and debugged portal features across front-end and back-end using ASP.Net, JQuery, and AngularJS",
      "Integrated tools like ChartJS and D3.js for advanced survey and performance metric visualization.",
    ]}
    role="Junior web developer"
  />
);
