import { PropsWithChildren, ReactNode } from "react";
import AvatarImage from "../../avatar/avatar";
import React from "react";
import { IconStyle as iconStyle, labelStyle, timeLineItemStyle } from "./time-line-item.css";

interface timeLineItemProp extends PropsWithChildren  {
  className?: string,
  iconContainerClass?: string,
  contentContainerClass?: string
}

const TimeLineItem = (props: timeLineItemProp) => {
  let avatar;
  const content: ReactNode[] = [];

  React.Children.forEach(props.children, (child) => {
    if (!React.isValidElement(child)) return;
    if (child.type === AvatarImage) {
      avatar = child;
    } else {
      content.push(child);
    }
  });

  return <li className={`${timeLineItemStyle} ${props.className}`}>
    <div className={`${iconStyle} ${props.iconContainerClass}`}>
      {avatar}
    </div>
    <div className={`${labelStyle} ${props.contentContainerClass}`}>
      {content}
    </div>
  </li>
  };

TimeLineItem.icon = AvatarImage;
export default TimeLineItem;