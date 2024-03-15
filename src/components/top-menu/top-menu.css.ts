import { blackA, violetA, whiteA } from "@radix-ui/colors";
import { style } from "@vanilla-extract/css";

export const userInfoContent = style({
  float: "left",
  display: "flex",
  width: "32%",
  justifyContent: "flex-start"
});

export const avatarContainer = style({
  minWidth: "150px",
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
  position: "absolute",
  top: "1px",
  left: "1px",
  cursor: "pointer",
  borderRadius: "100%",
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
  color: whiteA.whiteA10,
  fontSize: "17px"
});

export const separatorRoot = style({
  backgroundColor: blackA.blackA3,
  margin: '15px 0',
  height: "2px"
});

export const linkData = style({
  display: "flex",
  columnGap: '8px'
});

export const iconImages = style({
  width: "20px",
  height: "20px"
});

export const navIconImages = style({
  width: "22px",
  height: "22px"
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
  margin: "0"
});

export const menuItem = style({
  listStyle: "none"
});

export const collapsibleRoot = style({
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  userSelect: 'none',
  borderRadius: '5%',
});

export const collapsibleContent = style({
  display: "grid",
  gridTemplateColumns: "85px 1fr",
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  userSelect: 'none',
  borderRadius: '5%',
  padding: '5px 5px 5px 10px',
  position: "absolute",
  top: "2px",
  left: "11px",
  background: "#242424",
  width: "98vw",
  boxShadow: "0 3px 10px #161515"
});

export const iconButton = style({
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: violetA.violetA11,
  position: "absolute",
  top: "4px",
  left: "7px",

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
  color: whiteA.whiteA10,
  fontSize: "26px",
  fontFamily: "serif",
  fontWeight: "600",
  letterSpacing: "1px",
  wordSpacing: "2px",
  lineHeight: "16px",
  margin: "0 10px 0 0"
})