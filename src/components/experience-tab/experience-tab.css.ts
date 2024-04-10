import { style } from "@vanilla-extract/css";

export const tabsRoot = style({
  display: "grid",
  gridTemplateColumns: "255px 1fr",  
  columnGap: "10px",
  width: "100%",
  color: "initial",

});

export const tabsList = style({
  borderLeft: "1px solid red",
});

export const tabsTrigger = style({
  all:"unset",
  background: "transparent",
  padding: "20px 10px",
  display: "block",
  width: "100%",
  textAlign: "left",

  selectors: {
    '&[aria-selected="true"]': {
      borderBottom: "1px solid red",
    }
  }
});

export const tabsContent = style({
  width: "100%"
});

export const expDuration = style({
  fontSize: "0.9em"
})