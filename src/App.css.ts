import { style } from "@vanilla-extract/css";

export const baseGrid = style({
  display: "flex",
  position: "relative",
  columnGap:  "0.5vw",
  flexWrap: "wrap"
 });

 export const pageTopScrollBar = style({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "8px",
    background: "#fe0222",
    transformOrigin: "0%",
  });