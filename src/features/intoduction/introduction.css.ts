import { whiteA } from "@radix-ui/colors";
import { style } from "@vanilla-extract/css";

export const IntroContainer = style({
  color: whiteA.whiteA12,
  minHeight: "86vh"
});

export const toolTitle = style({
  marginTop: "5px"
});

export const aboutInfo = style({
  textAlign: "justify",
  padding: "0 2vw"
});

export const toolKitList = style({
  all: "unset",
  listStyle: "none",
  textAlign: "center",
  display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
  rowGap: "2em",
  padding: "0 15px"
});

export const toolKitListItem = style({
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  columnGap:"5px"
});

export const imagesStyle = style({ 
  selectors: {
    [`${toolKitListItem} &`]: {
      width: "40px",
      height: "40px"
    }
  }
});

export const intoPara = style({
  margin: "calc(1em + .5vh) 0"
});

export const hobbyIcon = style({
  width: "24px",
  margin: "23px 0 0"
});