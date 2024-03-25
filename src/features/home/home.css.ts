import { keyframes, style } from "@vanilla-extract/css";

export const homeContainer = style({
  width: "100%",
  height: "100vh",
  //background: 'url("Anup.jpg") top center',
 // backgroundRepeat: "no-repeat",
 // backgroundSize: "cover",
  minWidth: "300px",
  position: "relative"
});

export const intro_content = style({
  "top": "calc(35vh - 80px)",
  position: "relative",
  color: "white",
  display:"grid",
  gridTemplateColumns: "1fr"
});

export const highLighter = style({
  color: "#e96269"
});

export const typeContainer = style({
  fontSize: "1.5em",
  marginTop: "4vh"
});

const shadAnim = keyframes({
  "0%": { backgroundPosition: "0 0" },
  "1%": { backgroundPosition: "100% -100%" }
});

export const intro = style({
  display: "block",
  marginLeft: "30px",
  wordSpacing: "10px",
  letterSpacing: "2px",
  fontSize: "1.3em",
  borderTop: "2px solid white",
  paddingTop: "5px",
  marginTop: "5px",
  textAlign:"center"
});

export const shadowEffect = style({
  color: "white",
  fontFamily: "'Righteous', serif",
  fontSize: "calc(3em + 3vw);",
  textShadow: ".03em .03em 0 hsla(230,40%,50%,1)",
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  position: "relative",

  selectors: {
    '&:before': {      
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    position: "relative",
    },

    '&:after': {      
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
      content: "attr(data-shadow)",
      position: "absolute",
      top: ".2em",
      left: ".06em",
      zIndex: "1",
      textShadow: "none",
      backgroundImage:`linear-gradient(45deg, transparent 45%, hsl(0deg 0% 99.84%) 45%, hsl(0deg 0% 100%) 55%, transparent 0)`,
      backgroundSize: ".05em .05em",
      "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
      animation: `${shadAnim} 15s linear infinite`,
      lineHeight: "calc(62px + 3vw)"
    }
  }
});
