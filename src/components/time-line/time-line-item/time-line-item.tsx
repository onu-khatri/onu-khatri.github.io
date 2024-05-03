import { PropsWithChildren, ReactNode, useEffect, useRef } from "react";
import AvatarImage from "../../avatar/avatar";
import React from "react";
import { IconStyle as iconStyle, labelStyle, timeLineItemStyle } from "./time-line-item.css";
import { motion, useAnimation, useInView } from "framer-motion";

interface timeLineItemProp extends PropsWithChildren  {
  className?: string,
  iconContainerClass?: string,
  contentContainerClass?: string
}

const TimeLineItem = (props: timeLineItemProp) => {
  let avatar;
  const content: ReactNode[] = [];
  const ref = useRef(null);
  const isInview = useInView(ref);
  const controls = useAnimation();

  const ref2 = useRef(null);
  const isInview2 = useInView(ref2);
  const controls2 = useAnimation();
  
  React.Children.forEach(props.children, (child) => {
    if (!React.isValidElement(child)) return;
    if (child.type === AvatarImage) {
      avatar = child;
    } else {
      content.push(child);
    }
  });

  useEffect(() => {
    if (isInview) {
      controls.start("visible");
    }
  }, [isInview]);

  useEffect(() => {
    if (isInview) {
      controls2.start("visible");
    }
  }, [isInview2]);

  return <li className={`${timeLineItemStyle} ${props.className}`}>
    <motion.div ref={ref} className={`${iconStyle} ${props.iconContainerClass}`}
     variants={{
      hidden: { opacity: 0, translateX: 200 },
      visible: { opacity: 1, translateX: 0 }
    }}
    transition={{
      type: "spring",
      duration: 0.2,
      damping: 8,
      delay: 1,
      stiffness: 100,
    }}
      initial="hidden"
      animate={controls}    
    >
      {avatar}
    </motion.div>
    <motion.div ref={ref2} className={`${labelStyle} ${props.contentContainerClass}`}
   variants={{
    hidden: { opacity: 0, translateY: 90 },
    visible: { opacity: 1, translateY: 0 }
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
      {content}
    </motion.div>
  </li>
  };

TimeLineItem.icon = AvatarImage;
export default TimeLineItem;