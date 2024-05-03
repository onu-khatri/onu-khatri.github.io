import { Dispatch, SetStateAction, useId } from "react";
import { arrowButton, arrowCheckBox, arrowContainer, arrowLabel } from "./flip-arrow.css";

export const FlipArrow = (props: {className?: string, setValue: Dispatch<SetStateAction<boolean>>, value: boolean}) => {
  const id = useId(); 
  
  return (<div className={`${arrowContainer} ${props.className}`}>
    <input type="checkbox" id={`animation-${id}`} aria-hidden="true" className={arrowCheckBox} onChange={() => {
          props.setValue(!props.value);
        }}/>

    <label htmlFor={`animation-${id}`} className={arrowLabel}>
      <div className={arrowButton}></div>
    </label>
  </div>)
};