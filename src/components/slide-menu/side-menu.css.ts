import { blackA, violetA } from "@radix-ui/colors";
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
  width: '150px',
  height: '150px',
});

export const triggerAvatarSize = style({
  width: '15px',
  height: '15px',
});

export const linkText = style({
  color: blackA.blackA10,
  fontSize: "17px"
});

export const separatorRoot = style({
  backgroundColor: blackA.blackA3,
  margin: '15px 0',
  height: "2px"
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
  margin: "20px 0"
});

export const menuList = style({
  padding: "0",
  listStyle: "none"
});

export const menuItem = style({
  paddingBottom: "15px"
});

export const collapsibleRoot = style({
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  userSelect: 'none',
  borderRadius: '5%',
  maxWidth: "max-content",
  marginLeft: "10px",
  flex: "1 1 100%",
  maxHeight: "100vh",
  position: "sticky",
  top: "0px",

  selectors: {
    '&[data-state="closed"]': {
      animation: `${fadeOutLeftKeyFrame} 1s ease-out`
    },
    '&[data-state="open"]': {
      animation: `${fadeInLeftKeyFrame} 500ms cubic-bezier(0, 0, 0.2, 1);`
    }
  }

});

export const collapsibleContent = style({
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  userSelect: 'none',
  borderRadius: '5%',
  padding: '20px 10px 10px 10px',
  background: "white",
  height: "98.5vh",
  boxShadow: "0 3px 10px white",
  animation: `fadeInLeftKeyFrame 1s ease-in`,
});

export const iconButton = style({
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: violetA.violetA11,
  boxShadow: `0 2px 10px ${blackA.blackA9}`,
  transform: "translate(5px, -92vh)",
  selectors: {
    '&[data-state="closed"]': {
     display: "none"
    },
    '&[data-state="open"]': {
      backgroundColor: violetA.violetA3,
      height: "25px",
      width: "25px",
    },
    '&:hover': {
      backgroundColor: violetA.violetA3
    },
    '&:focus': {
      boxShadow: "0 0 0 2px black"
    }
  }
});

export const userName = style({
  color: "black",
  fontSize: "26px",
  fontFamily: "serif",
  margin: "6px",
  fontWeight: "600",
  letterSpacing: "1px",
  wordSpacing: "2px"
})

export const fadeInLeft = style({
  animationDuration: "1s",
  animationFillMode: "both",
  animationName: `${fadeInLeftKeyFrame}`
})

