import { style } from "@vanilla-extract/css";
import { wrap } from "lodash";


export const baseGrid = style({
  display: "flex",
  position: "relative",
  columnGap:  "0.5vw",
  flexWrap: "wrap"
 });
