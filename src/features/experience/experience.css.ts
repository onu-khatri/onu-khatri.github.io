import { whiteA } from "@radix-ui/colors";
import { style } from "@vanilla-extract/css";

export const experienceRoot = style({
  color: whiteA.whiteA12,
  letterSpacing: "1px",
  padding: "2vh 4vw 2vh",
  marginTop: "6vh"
});

export const timerHolder = style({
  display: "inline-block",
  position: "absolute",
  top: "26px",
  right: "4vw"
});

export const headerTitle = style({
  marginTop: 0,
    color: "white",
    fontSize: "20px",
    marginBottom: "5px",
    padding: "0 0 10px 0",
    borderBottom: "1px solid rgba(255, 255, 255, 0.4)"
});

export const datePlaceHolder = style({
  color: "#BFC3C7",
  display: "block",
  fontSize: "14px",
  fontWeight: "600",
  position: "absolute",
  top: "6px",
  right: "20px"
});

export const paraHolder = style({
  textAlign: "justify"
});

export const companyHolder = style({
  opacity: "0.7",
    color: "rgba(255, 255, 255, 1)",
    letterSpacing: "0px",
    fontSize: "18px",
    lineHeight: "1.2em",
    fontWeight: "600",
    padding: 0,
    paddingBottom: "10px",
    margin: 0,
    textAlign: "left"
})

export const avatarSize = style({
  width: "5em",
  height: "5em"
})