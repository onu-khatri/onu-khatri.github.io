import { motion } from "framer-motion";
import { AdmiralTravel } from "../components/projects/AdmiralTravel";
import { Rastreator } from "../components/projects/Rastreator";
import { TalentDiscoveryCard } from "../components/projects/TalentDiscoveryCard";
import { TdpP4P } from "../components/projects/TdpP4P";
import { UkCycle } from "../components/projects/UkCycle";
import { Wakeel } from "../components/projects/Wakeel";
import { H2Heading } from "../components/UI/H2Heading";

export const Projects = () => {
  return (
    <motion.section
      id="projectsSection"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mt-12 scroll-mt-12"
    >
      <H2Heading>Projects:</H2Heading>
      <div className="flex justify-evenly flex-wrap gap-x-12 gap-y-20">
        <TalentDiscoveryCard />
        <TdpP4P />
        <Rastreator />
        <Wakeel />
        <AdmiralTravel />
        <UkCycle />
      </div>
    </motion.section>
  );
};
