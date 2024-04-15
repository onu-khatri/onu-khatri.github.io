import { whiteA } from "@radix-ui/colors";
import { style } from "@vanilla-extract/css";

export const frontContainer = style({
  position: "absolute",
	top: 0,
	left: 0,
	width: "100%",
	height: "100%",
	backfaceVisibility: "hidden",
	transformStyle: "preserve-3d",
	borderRadius: "6px",
  color: whiteA.whiteA10,
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
		background: `linear-gradient(135deg, rgb(3 95 232 / 70%), #000000)`
  }
 }

});

export const frontInnerContainer = style({
	height: "100%",
  width: "100%",
	transform: "translateZ(80px) scale(0.94)"
});