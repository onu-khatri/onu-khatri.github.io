import { style } from "@vanilla-extract/css";

export const projectContainer = style({
  padding: "2vh 1vw 2vh",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  flexBasis: "fit-content",
  flexGrow: "1",
  rowGap: "2em",
  gridTemplateColumns: "1fr 1fr 1fr",
  flexShrink: "1",
  justifyContent: "space-between",

  selectors: {
    '&:after': {
      display: "none"
    },
    '&:before': {
      display: "none"
    }
  }
});
