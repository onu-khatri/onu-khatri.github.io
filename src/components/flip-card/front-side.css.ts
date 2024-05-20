import { whiteA } from "@radix-ui/colors";
import { style } from "@vanilla-extract/css";

export const frontContainer = style({
	lineHeight: "1.5em",
  position: "absolute",
	top: 0,
	left: 0,
	width: "100%",
	height: "100%",
	backfaceVisibility: "hidden",
	transformStyle: "preserve-3d",
	borderRadius: "6px",
  color: whiteA.whiteA12,
  backgroundColor: "#000",
	backgroundSize: "cover",
	backgroundPosition: "center center",

 selectors: {
  '&:after': {
    content: '',
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		display: "block",
		borderRadius: "6px",
		backfaceVisibility: "hidden",
		backgroundImage: 'linear-gradient(to bottom, #00044f, #00084b, #000b47, #000e42, #00103d, #001038, #011033, #03102e, #040e28, #040c22, #03091c, #010616)'
  }
 }

});

export const frontInnerContainer = style({
	height: "100%",
  width: "100%",
	transform: "translateZ(80px) scale(0.94)"
});