import { Children, isValidElement, ReactElement, ReactNode, useState } from "react"
import FrontSide from "./front-side";
import BackSide from "./back-side";
import { cardContainer, cardContent, cardMoreButton, moreButton } from "./flip-card.css";
import { FlipArrow } from "../flip-arrow/flip-arrow";

export interface containerProps extends React.PropsWithChildren {
  children?: ReactElement[] | ReactElement,
  className?: string
}

const FlipCard = (props: containerProps) => {
  let frontSide;
  let backSide;
  const content: ReactNode[] = [];

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
  
 return <div className={`${cardContainer} ${props.className}`}>
    <input type="checkbox" id="card1" className={cardMoreButton} aria-hidden="true" checked={flipState}/>
  
    <div className={cardContent}>
      {frontSide}
      {backSide}
      </div>
      <label for="card1" className={moreButton} aria-hidden="true">
        <FlipArrow value={flipState} setValue={setFlipState}/>
    </label>
      
    { content }
  </div>
};

FlipCard.frontSide = FrontSide;
FlipCard.backSide = BackSide;

export default FlipCard;
