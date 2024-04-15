import { backContainer, backInnerContainer } from "./back-side.css";
import { containerProps } from "./flip-card";

const BackSide = (props: containerProps) => (
  <div className={`${backContainer} ${props.className}`}>
    <div className={backInnerContainer}>
      {props.children}
    </div>
  </div>
);

export default BackSide;