import { Dispatch, SetStateAction } from "react";
import { arrowButton, arrowCheckBox, arrowContainer, arrowLabel } from "./flip-arrow.css";

export const FlipArrow = (props: {className?: string, setValue: Dispatch<SetStateAction<boolean>>, value: boolean}) => (
  <div className={`${arrowContainer} ${props.className}`}>
    <input type="checkbox" id="animation3" aria-hidden="true" className={arrowCheckBox} onChange={() => {
          props.setValue(!props.value);
        }}/>

    <label for="animation3" class={arrowLabel}>
      <div className={arrowButton}></div>
    </label>
  </div>
);