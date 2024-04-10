import { style } from "@vanilla-extract/css";

export const timeLine = style({
  listStyle: "none",
  position: "relative",

  selectors: {
    '&:before': {
      content: '',
      position: "absolute",
      top: "3%",
      bottom: 0,
      width: "10px",
      background: "#324454",
      left: "13%",
      height: "100%"
    }
  }

});