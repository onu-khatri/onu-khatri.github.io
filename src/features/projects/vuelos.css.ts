import { whiteA } from "@radix-ui/colors";
import { style } from "@vanilla-extract/css";

export const headerImageContainer = style({
  width: "100%",
  height: "153px",
  maxHeight:"200px",
  marginBottom: "7px",
});

export const cardTitleCss = style({
  all: "unset",
  fontSize: "1.5em",
  margin: "10px 0",
  color: whiteA.whiteA12,
});

export const cardContentMargin = style({
padding: "10px 10px",
textAlign: "justify"
});

export const styleChipsContainer = style({
  all: "unset",
  padding: "0 10px",
  marginTop: "18px",
  display: "flex",
  columnGap: "10px",
  flexWrap: "wrap",
  listStyle: "none",
  rowGap: "12px"
});

export const styleChip = style({
  width: "calc(max-content + 20px)",
  // background: "radial-gradient(circle, rgb(0 32 188) 95%, rgba(6, 0, 37, 1) 100%)",
  border: "1px solid white",
  color: whiteA.whiteA12,
  borderRadius:"10px",
  padding: "2px 12px"
});

export const companyCardLogo = style({
  position:"absolute",
  top: "-1em",
  left: "-1em",
  width: "3em",
  height: "3em"
 });