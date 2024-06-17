import { keyframes, style } from "@vanilla-extract/css";

const blink = keyframes({
  "0%": { backgroundColor: "#ccc" },
  "49%": { backgroundColor: "#ccc" },
  "50%": { backgroundColor: "transparent" },
  "99%": { backgroundColor: "transparent" },
  "100%": { backgroundColor: "#ccc" }
});

export const cursor = style({
  backgroundColor: "#ccc",
  display: "none",
  marginLeft: "0.1rem",
  width: "3px",
  animation: `${blink} 1s infinite`,

  selectors: {
    '&.typing': {
      animation: "none"
    }
  }
});

export const listItemType = style({
  display: "none", marginBottom: ".5em",

  '@media': {
    'screen and (max-width: 768px)': {
      marginBottom: "1.3em"
    }
  }
});

export const checkBoxBullet = style({
  position: "relative",
  display: "inline-block",
  paddingLeft: "30px",

  selectors: {
    '&:before': {
      content: '',
      position: "absolute",
      top: "50%",
      marginTop: "-15px",
      left: "0",
      display: "block",
      height: "16px",
      width: "16px",
      backgroundColor: "#50CDBE",
      borderRadius: "3px",
    },
    '&:after': {
      content: '',
      position: "absolute",
      left: "6px",
      top: "-13px",
      width: "5px",
      height: "11px",
      border: "solid #333",
      borderWidth: "0 3px 3px 0",
      transform: "rotate(45deg)",
      opacity: 1,
    }
  }
})