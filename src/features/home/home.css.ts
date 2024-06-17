import { blackA, whiteA } from "@radix-ui/colors";
import { keyframes, style } from "@vanilla-extract/css";

export const homeContainer = style({
  width: "100%",
  height: "88vh",
  minWidth: "300px",
  position: "relative",

  '@media': {
    'screen and (max-width: 480px)': {
      height: "97vh"
    },

    'screen and (max-width: 768px)': {
      backgroundImage: "url('/thumbnails/working-dev-10.svg')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50% 0",
      backgroundSize: "cover",

      selectors: {
        '&:before': {
          content: ' ',
          display: "block",
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          opacity: "0.95",
          background: blackA.blackA12
        }
      }
    }
  }
});

export const intro_content = style({
  top: "10vh",
  position: "relative",
  color: "white",
  display: "flex",
  justifyContent: "space-around",

  
  '@media': {
    'screen and (max-width: 480px)': {
      lineHeight: "1.8em",
      top: "5vh"
    }
  }
});

export const highLighter = style({
  color: whiteA.whiteA12,
  letterSpacing: ".8px",

  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: "1.5em"
    }
  }
});

export const subTitle = style({
  color: "#e96269", fontSize: "1.2em", display: "block",
  marginTop: "10vh",

  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: "1.7em",
      marginBottom: "1.2em",
      marginTop: "5vh"
    }
  }
});

export const typeContainer = style({
  fontSize: "1.1em",
  marginTop: "10px",
  paddingLeft: 0,
  
  '@media': {
    'screen and (max-width: 480px)': {
      fontSize: "1em"   
    }
  }
});

const shadAnim = keyframes({
  "0%": { backgroundPosition: "0 0" },
  "1%": { backgroundPosition: "100% -100%" }
});

export const intro = style({
  display: "block",
  wordSpacing: "10px",
  letterSpacing: "2px",
  fontSize: "1.5em",
  paddingTop: "5px",
  marginTop: "5px",
  textAlign: "center",

  '@media': {
    'screen and (max-width: 480px)': {
      fontSize: "1.3em",
      letterSpacing: "1px"
    }
  }
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
      backgroundImage: `linear-gradient(45deg, transparent 45%, hsl(0deg 0% 99.84%) 45%, hsl(0deg 0% 100%) 55%, transparent 0)`,
      backgroundSize: ".05em .05em",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      animation: `${shadAnim} 15s linear infinite`,
      lineHeight: "calc(62px + 3vw)"
    } as React.CSSProperties
  }
});

export const devWorkImage = style({
  width: "30vw", height: "57vh", display: "block",
  top: "10vh", right: "10px",

  '@media': {
    'screen and (max-width: 768px)': {
      display: "none"
    }
  }
})

export const bottomText = style({ marginTop: "2em", fontSize: "1.3em", 

'@media': {
  'screen and (max-width: 768px)': {
    fontSize: "1.6em",
    lineHeight: "1.6em"
  }
}
});

