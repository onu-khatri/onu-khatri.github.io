import { whiteA } from "@radix-ui/colors";
import { style } from "@vanilla-extract/css";

export const backContainer = style({
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
	transform: "rotateY(180deg)",
	background: "#000",
	border: "2px solid rgb(240, 240, 240)",

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
			background: `linear-gradient(180deg, rgb(3 81 196 / 70%), #0f0132)`,
		}
	}
});

export const backInnerContainer = style({
	height: "100%",
		display: "block",
		padding: "0.5em",
		transform: "translateZ(80px) scale(0.94)"
});