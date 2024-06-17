import { style } from "@vanilla-extract/css";
import { size } from "lodash";

export const timer = style({
  fontSize: "1.3em",
  fontWeight: "100",
  color: "#fff",
  textShadow: "0 0 20px #fff",
  textAlign: "center"
});

export const divTimer = style({
  display: "inline-block",
  minWidth: "40px",

  '@media': {
    'screen and (max-width: 480px)': {
      minWidth: "33px",
      fontSize: "1em"
    }
  }
});

export const spanTimer = style({
  color: "#B1CDF1",
  display: "block",
  fontSize: ".5em",
  fontWeight: "400",
  lineHeight: "1.4em"
});

export const sinceTimer = style({
  color: "#B1CDF1",
  display: "block",
  fontSize: ".6em",
  fontWeight: "400",
  paddingBottom: "5px",
  textShadow: "0 0 10px #48C8FF",
});