import { whiteA } from "@radix-ui/colors";
import { style } from "@vanilla-extract/css";

export const gitCardContainer = style({
  padding: "18px 12px",
  color: whiteA.whiteA12,
  maxWidth: "21em",

  selectors: {
    '&:hover': {
      border: "1px solid white",
      backgroundImage: 'linear-gradient(to bottom, #030867, #000f62, #00135c, #001756, #00194f, #011948, #031841, #05173a, #061431, #071028, #050c1f, #010616)',
      borderRadius: "5px",
      cursor: "pointer",
      boxShadow: "0 0 13px 2px #48abe0"
    }
  }
});

export const techList = style({
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  flexWrap: "wrap",
  columnGap: "10px",
  marginTop: "12px",
  color: whiteA.whiteA9
});

export const langList = style({
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  flexWrap: "wrap",
  columnGap: "10px"
});

export const langContainer = style({
  display: "grid",
  gridTemplateColumns: "1fr auto",
  columnGap: "10px",
  marginBottom: "24px"
});

export const langListItem = style({
  fontSize: "0.9em"
});

export const langBullet = style({
  marginRight: "10px",
  display: "inline-block",
  width: "10px",
  height: "10px",
  borderRadius: "100%",

});