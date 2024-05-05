import { style } from "@vanilla-extract/css";

export const cardContainer = style({
  width: "365px",
  height: "34em",
  margin: "1em",
  perspective: "1500px"
});

export const moreButton = style({
  position: "absolute",
  bottom: "5px",
  right: "10px",
  zIndex: "99"
});

export const cardMoreButton = style({
  display: "none",
});

export const cardContent = style({
  position: "relative",
  width: "100%",
  height: "100%",
  transformStyle: "preserve-3d",
  transition: "transform 0.8s cubic-bezier(0.75, 0, 0.85, 1)",

  selectors: {
    [`${cardMoreButton}:checked ~ .&`]: {
      transform: "rotateY(180deg)"
    }
  }
});

