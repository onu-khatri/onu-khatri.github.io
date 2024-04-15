import { Children, isValidElement, ReactNode } from "react";
import { containerProps } from "./flip-card";
import { HeaderImage } from "./header-image";
import { frontContainer, frontInnerContainer } from "./front-side.css";


const FrontSide = (props: containerProps) => {
  let headerImage;
  const content: ReactNode[] = [];

  Children.forEach(props.children, (child) => {
    if (!isValidElement(child)) return;
    if (child.type === HeaderImage) {
      headerImage = child;
    } else {
      content.push(child);
    }
  });
  
  return <div className={`${frontContainer} ${props.className}`}>
    <div className={frontInnerContainer}>
    {headerImage}
    <div>
      {content}
    </div>
    </div>    
  </div>
};


FrontSide.headerImage = HeaderImage;

export default FrontSide;
