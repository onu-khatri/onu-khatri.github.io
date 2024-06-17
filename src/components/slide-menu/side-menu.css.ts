import { blackA, violetA, whiteA } from "@radix-ui/colors";
import { keyframes, style } from "@vanilla-extract/css";


export const fadeInLeftKeyFrame = keyframes({
  "from": {
    opacity: 0,
    transform: "translate3d(0, -100%, 0)"
  },

  "to": {
    opacity: 1,
    transform: "none"
  }
});

export const fadeOutLeftKeyFrame = keyframes({
  "from": {
    opacity: 1,
    transform: "none"
  },

  "to": {
    opacity: 0,
    transform: "translate3d(0, -100%, 0)"
  }
});

export const avatarSize = style({
  width: '100px',
  height: '100px',
});

export const triggerAvatarSize = style({
  width: '15px',
  height: '15px',
});

export const linkText = style({
  color: whiteA.whiteA12,
  fontSize: "17px"
});

export const separatorRoot = style({
  backgroundColor: whiteA.whiteA12,
  margin: 'calc(12px + 2vh) 0',
  height: "2px"
});

export const mediaSeparatorRoot = style({
  backgroundColor: whiteA.whiteA12,
  margin: "0 5px"
});

export const linkData = style({
  display: "flex",
  columnGap: '15px'
});

export const iconImages = style({
  width: "22px",
  height: "22px"
});

export const navIconImages = style({
  width: "26px",
  height: "26px"
});

export const socialMargins = style({
  margin: "2px 0"
});

export const menuList = style({
  padding: "0",
  listStyle: "none"
});

export const menuItem = style({
  paddingBottom: "calc(12px + 2vh)"
});

export const collapsibleRoot = style({
  minWidth: "50px",
    minHeight: "50px",
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  userSelect: 'none',
  borderRadius: '5%',
  maxWidth: "max-content",
  marginLeft: "1px",
  flex: "1 1 100%",
  zIndex: "999",
  background: blackA.blackA12,
  textAlign: "center"
});

export const menuContainer = style({
  position: "absolute",
  top: "1px",
  left: "1px",  
  zIndex: 999,

  '@media': {
    'screen and (min-width: 769px)': {
      display: "none"
    }
  }
});

export const DropdownMenuArrow = style ({
  fill: "white"
})

export const collapsibleContent = style({
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  userSelect: 'none',
  borderRadius: '5%',
  padding: '20px 10px 10px 10px',
  borderRight:"1px dashed #9893f2",
  backgroundImage: "linear-gradient(to top, #000000, #100108, #170413, #1a071d, #170d28, #160e2c, #151031, #131136, #1c0d33, #23092f, #29052a, #2d0125)",

  selectors: {
    '&[data-state="closed"]': {
      display: "none"
    },
    '&[data-state="open"]': {
      animation: `${fadeInLeftKeyFrame} 500ms cubic-bezier(0, 0, 0.2, 1);`
    }
  }
});

export const iconButton = style({
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: whiteA.whiteA12,
  boxShadow: `0 2px 10px ${whiteA.whiteA12}`,
  backgroundColor: violetA.violetA3,
  width: "38px",
  height: "38px",
  margin: "5px",

  selectors: {
    '&:hover': {
      backgroundColor: violetA.violetA3
    },
    '&:focus': {
      boxShadow: "0 0 0 2px black"
    }
  }
});

export const userName = style({
  color: whiteA.whiteA12,
  fontSize: "26px",
  fontFamily: "serif",
  padding: "12px 0",
  fontWeight: "600",
  letterSpacing: "1px",
  wordSpacing: "2px"
})

export const fadeInLeft = style({
  animationDuration: "1s",
  animationFillMode: "both",
  animationName: `${fadeInLeftKeyFrame}`
})

