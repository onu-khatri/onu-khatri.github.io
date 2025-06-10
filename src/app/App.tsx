import "./App.css";
import { VerticalSideMenu } from "../components/VerticalMenu";
import { HomePage } from "../pages/home";
import { AboutMe } from "../components/AboutMe";
import { Toolkit } from "../components/Toolkit";
import { ExperienceTimeline } from "../components/Expierence";
import { Projects } from "../pages/Projects";
import { Contact } from "../components/contact";
import { MediumArticles } from "../pages/MediumArticles";
import { Initiatives } from "../pages/Initiatives";

function App() {
  return (
    <div className="bg-[hsl(var(--background))] min-h-[100vh] flex justify-around">
      <VerticalSideMenu />
      <main className="w-full flex flex-row flex-wrap justify-around sm:max-w-[90%] lg:max-w-[80%] self-center min-h-[100vh] p-4">
        <HomePage />
        <AboutMe />
        <Toolkit />
        <ExperienceTimeline />
        <Projects />
        <Initiatives />
        <MediumArticles />
        <Contact />
      </main>
    </div>
  );
}

export default App;
