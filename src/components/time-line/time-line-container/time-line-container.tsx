import { ReactElement } from "react"
import { timeLine } from "./time-line-container.css"
import TimeLineItem from "../time-line-item/time-line-item";

interface containerProps extends React.PropsWithChildren {
  children: ReactElement[],
  className?: string
}

const TimeLineContainer = (props: containerProps) => (
  <ul className={`${timeLine} ${props.className}`}>
      {props.children}
  </ul>
);

TimeLineContainer.item = TimeLineItem;
export default TimeLineContainer;
