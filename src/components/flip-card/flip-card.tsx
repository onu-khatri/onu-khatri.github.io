import { Children, isValidElement, ReactElement, ReactNode, useEffect, useId, useRef, useState } from "react"
import FrontSide from "./front-side";
import BackSide from "./back-side";
import { cardContainer, cardContent, cardMoreButton, moreButton } from "./flip-card.css";
import { FlipArrow } from "../flip-arrow/flip-arrow";
import { motion, useAnimation, useInView } from "framer-motion";

export interface containerProps extends React.PropsWithChildren {
  children?: ReactElement[] | ReactElement,
  className?: string
}

const FlipCard = (props: containerProps) => {
  let frontSide;
  let backSide;
  const content: ReactNode[] = [];
  const id = useId(); 
  
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInview) {
      controls.start("visible");
    }
  }, [isInview]);

  const onChange = () => {};

  Children.forEach(props.children, (child) => {
    if (!isValidElement(child)) return;
    if (child.type === FrontSide) {
      frontSide = child;
    } else if (child.type === BackSide) {
      backSide = child;
    } else {
      content.push(child);
    }
  });

  const [flipState, setFlipState] = useState(false);
  
 return <motion.div ref={ref} className={`${cardContainer} ${props.className}`}
 variants={{
  hidden: { opacity: 0, translateX: -20 },
  visible: { opacity: 1, translateX: 0 }
}}
transition={{
  type: "spring",
  duration: 2,
  damping: 8,
  delay: 0.5,
  stiffness: 100,
}}
  initial='hidden'
  animate={controls}   
 >
    <input type="checkbox" id={`card-${id}`} className={cardMoreButton} aria-hidden="true" checked={flipState} onChange={onChange}/>
  
    <div className={cardContent}>
      {frontSide}
      {backSide}
      </div>
      <label htmlFor={`card-${id}`} className={moreButton} aria-hidden="true">
        <FlipArrow value={flipState} setValue={setFlipState}/>
    </label>
      
    { content }
  </motion.div>
};

FlipCard.frontSide = FrontSide;
FlipCard.backSide = BackSide;

export default FlipCard;
