import { CubeIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { PropsWithChildren, ReactNode, useRef } from "react";
import {
  gitCardContainer,
  langBullet,
  langContainer,
  langList,
  langListItem,
  techList,
} from "./git-card.css";

interface GitCardProp extends PropsWithChildren {
  className?: string;
  titleContainerClass?: string;
  contentContainerClass?: string;
  title: string;
  description: string;
  langList: { name: string; langClass: string }[];
  size: string;
  techTags: string[];
  url: string
}

export const GitCards = (props: GitCardProp) => {
  const ref2 = useRef(null);
  const langNodes: ReactNode[] = [];

  props.langList.forEach((lang) => {
    langNodes.push(
      <li className={langListItem}>
        <div className={`lang ${langBullet} ${lang.langClass}`}></div>
        <span>{lang.name}</span>
      </li>
    );
  });

  return (
    <li>
      <a href={props.url} target="_blank">
      <motion.div
      ref={ref2}
      className={gitCardContainer}
      variants={{
        hidden: { opacity: 0, translateY: 90 },
        visible: { opacity: 1, translateY: 0 },
      }}
      transition={{
        type: "spring",
        duration: 0.2,
        damping: 8,
        delay: 0.3,
        stiffness: 100,
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      //animate={controls2}
    >
      <h3 style={{ margin: 0, display: "flex", columnGap: '16px', borderBottom: '1px solid', padding: '0 10px 5px 0', fontSize: "1.3em" }}>
        <CubeIcon style={{ width: "28px", height: "28px" }} /> {props.title}
      </h3>
      <p style={{ fontSize: "1.2em", textAlign: 'justify', margin: '28px 0 25px 0' }}>{props.description}</p>
      <div className={langContainer}>
        <ul className={langList}>{langNodes}</ul>
        <div>{props.size}</div>
      </div>
      <ul className={techList}>
        {props.techTags.map((tag) => (
          <li>#{tag}</li>
        ))}
      </ul>
      </motion.div>
      </a>
    </li>
  );
};
