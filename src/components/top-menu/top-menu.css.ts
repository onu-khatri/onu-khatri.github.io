import { violetA, whiteA } from "@radix-ui/colors";
import { keyframes, style } from "@vanilla-extract/css";

export const fadeInLeftKeyFrame = keyframes({
  "from": {
    opacity: 0,
    transform: "translate3d(-100%, 0, 0)"
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
    transform: "translate3d(-100, 0, 0)"
  }
});


export const userInfoContent = style({
  float: "left",
  display: "flex",
  width: "32%",
  justifyContent: "flex-start"
});

export const avatarContainer = style({
  minWidth: "70px",
  position: "relative"
})

export const navigationLinks = style({
  float: "right",
  display: "flex",
  width: "68%",
  justifyContent: "flex-end"
});

export const menuContent = style({
  display: "flex"
});

export const avatarButton = style({
  all: "unset",
  top: "1px",
  left: "1px",
  cursor: "pointer",
  borderRadius: "100%",
  position: "absolute",
  zIndex: "999"
});

export const avatarSize = style({
  width: '70px',
  height: '70px',
});

export const triggerAvatarSize = style({
  width: '15px',
  height: '15px',
});

export const linkText = style({
  color: whiteA.whiteA12,
  fontSize: "14px"
});

export const separatorRoot = style({
  backgroundColor: whiteA.whiteA12,
  margin: "0 15px"
});

export const linkData = style({
  display: "flex",
  columnGap: '8px',
  cursor: 'pointer'
});

export const activeLink = style({
  selectors: {
  [`${linkData}.&`]: {
    color: "red"
  }
}
});

export const iconImages = style({
  width: "20px",
  height: "20px"
});

export const navIconImages = style({
  width: "20px",
  height: "20px"
});

export const socialMargins = style({
  margin: "0 15px"
});

export const menuList = style({
  padding: "0",
  display: "flex",
  flexDirection: "row",
  columnGap: "2vw",
  width: "100%",
  listStyle: "none",
  justifyContent: "center",
  flexWrap: "wrap",
  margin: "0",
  lineHeight: "24px"
});

export const menuItem = style({
  listStyle: "none"
});

export const stickyMenuContainer = style({
  position: "sticky",
  top: "0",
  width: "100%",
  zIndex: "999",

  '@media': {
    'screen and (max-width: 768px)': {
      display: "none"
    }
  }
})

export const collapsibleRoot = style({
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  userSelect: 'none',
  borderRadius: '5%',
  display: "grid",
  width: "100%",
  gridTemplateColumns: "1fr",
  paddingTop: "16px",
  background: "black",

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
  padding: '5px 5px 5px 10px',
  background: "black",
  borderBottom: "2px dotted #303030"
});

export const iconButton = style({
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",

  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: violetA.violetA11,

  selectors: {
    '&[data-state="closed"]': {
      backgroundColor: "white",
      height: "85px",
      width: "85px",
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
  color: whiteA.whiteA12,
  fontSize: "20px",
  fontFamily: "serif",
  fontWeight: "600",
  letterSpacing: "1px",
  wordSpacing: "2px",
  lineHeight: "16px",
  margin: "0 10px 0 0"
});

export const pageTopScrollBar = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: "6px",
  background: "#fe0222",
  transformOrigin: "0%",
});