import { keyframes, style } from "@vanilla-extract/css";

const blink = keyframes({
  "0%":  { backgroundColor: "#ccc" },
  "49%": { backgroundColor: "#ccc" },
  "50%": { backgroundColor: "transparent" },
  "99%": { backgroundColor: "transparent" },
  "100%":  { backgroundColor: "#ccc" }
});

export const cursor = style({
  backgroundColor: "#ccc",
  display: "inline-block",
  marginLeft: "0.1rem",
  width: "3px",
  animation: `${blink} 1s infinite`,

  selectors: {
    '&.typing': {
      animation: "none"
    }
  }
});
