import { keyframes, style } from "@vanilla-extract/css";

const arrowAnimationAfter = keyframes({
  '0%': {
    right: "-3px",
    top: "-4px",
    transform: "rotate(45deg)",
    background: "blue"
  },

  '25%': {
    width: "3px",
    borderRadius: "50%",
    top: "20px",
    left: "15px"
  },

  '75%': {
    width: "3px",
    borderRadius: "50%",
    top: "-20px",
    left: "15px"
  },

  "100%": {
    left: "-3px",
    bottom: "-4px",
    transform: "rotate(135deg)",
    height: "3px",
    width: "15px",
    background: "#fff"
  }
});

const arrowAnimationBefore = keyframes({
  "0%": {
    right: "-3px",
    top: "-4px",
    transform: "rotate(45deg)",
    background: "red",
  },

  "25%": {
    width: "3px",
    borderRadius: "50%",
    top: "-20px",
    left: "15px",
  },

  "75%": {
    width: "3px",
    borderRadius: "50%",
    top: "20px",
    left: "15px",
  },

  "100%": {
    left: "-3px",
    bottom: "-4px",
    transform: "rotate(-135deg)",
    height: "3px",
    width: "15px",
    background: "#fff",
  }
});

const arrowAnimationAfterReverse =  keyframes({
  "0%": {
    left: "-3px",
    bottom: "-4px",
    transform: "rotate(135deg)",
    height: "3px",
    width: "15px",
    background: "#fff",
  },

  "50%": {
    width: "3px",
    borderRadius: "50%",
    top: "-20px",
    left: "15px",
  },

  "100%": {
    right: "-3px",
    top: "-4px",
    transform: "rotate(45deg)",
  }
});

const arrowAnimationBeforeReverse = keyframes ({
  "0%": {
    left: "-3px",
    bottom: "-4px",
    transform: "rotate(-135deg)",
    height: "3px",
    width: "15px",
    background: "#fff",
  },

  "50%": {
    width: "3px",
    borderRadius: "50%",
    bottom: "-20px",
    left: "15px",
  },

  "100%": {
    right: "-3px",
    bottom: "-4px",
    transform: "rotate(-45deg)",
  }
});

export const arrowContainer = style({
  position: "relative",
  display: "inline-block"
});


export const arrowLabel = style({
  display: "block",
  width: "40px",
  height: "25px",
  cursor: "pointer"
});

export const arrowCheckBox = style({
  display: "none"
});

export const arrowButton = style({
  background: "#fff",
  height: "3px",
  width: "30px",
  margin: "0 auto",
  position: "relative",
  cursor: "pointer",
  top: "12px",

  selectors: {
  '&:before': {
    content: "",
    background: "#fff",
    position: "absolute",
    height: "3px",
    width: "15px",
    right: "-3px",
    bottom: "-4px",
    transform: "rotate(-45deg)"
  },

  '&:after': {
    content: "",
    background: "#fff",
    position: "absolute",
    height: "3px",
    width: "15px",
    right: "-3px",
    top: "-4px",
    transform: "rotate(45deg)",
    opacity: 1
  },

  [`${arrowCheckBox} + label > .&:before`]: {
    animation: `${arrowAnimationBeforeReverse} 1s ease 0s 1 alternate both`
  },

  [`${arrowCheckBox} + label > .&:after`]: {
    animation: `${arrowAnimationAfterReverse} 1s ease 0s 1 alternate both`
  },

  [`${arrowCheckBox}:checked + label > .&:before`]: {
    animation: `${arrowAnimationBefore} 1s ease 0s 1 alternate both;`
  },

  [`${arrowCheckBox}:checked + label > .&:after`]: {
    animation: `${arrowAnimationAfter} 1s ease 0s 1 alternate both`
  }
}
});
