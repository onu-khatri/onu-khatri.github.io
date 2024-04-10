import { style } from "@vanilla-extract/css";

export const timeLineItemStyle = style({
  selectors: {
    ':last-child:before': {
      content: "initial"
    }
  }
})

export const IconStyle = style({
  width: "150px",
  height: "150px",
  top: "3%",
  position: "absolute",
  color: "#151515",
  background: "#324454",
  borderRadius: "50%",
  textAlign: "center",
  left: "8%",
  margin: "0 0 0 -25px",

  '@media': {
    'screen and (min-width: 768px)': {
      selectors: {
        [`${timeLineItemStyle}:nth-child(odd) &`]: {
          position: "relative",
          float: "left",
          left: "auto",
          margin: "0px 5px 0 0px"
        },

        [`${timeLineItemStyle}:nth-child(even) &`]: {
          position: "relative",
          float: "right",
          left: "auto",
          margin: "0px 5px 0 0px"
        }
      }
    },
    '(prefers-reduced-motion)': {
      transitionProperty: 'color'
    }
  }
});


export const labelStyle = style({
  margin: "0 0 15px 25%",
  padding: "30px",
  position: "relative",
  borderRadius: "5px",
  minHeight: "150px",

  selectors: {
    '&:after': {
      right: "100%",
      border: "solid transparent",
      content: " ",
      height: 0,
      width: 0,
      position: "absolute",
      pointerEvents: "none",
      borderRightColor: "rgba(50, 68, 84, 1)",
      borderWidth: "10px",
      top: "70px",
    },
  },

  '@media': {
    'screen and (min-width: 768px)': {
      margin: "30px 0 70px 0",
      padding: "50px 30px 30px 30px",
      float: "left",

      selectors: {
        '&:after': {
          right: "auto",
          borderRightColor: "transparent",
          borderBottomColor: "rgb(50, 68, 84)",
          top: "-20px",
        },
        [`${timeLineItemStyle}:nth-child(odd) &:after`]: {
          borderRightColor: "transparent",
          borderBottomColor: "rgb(43, 58, 72)",
          left: "65px"
        },

        [`${timeLineItemStyle}:nth-child(even) &:after`]: {
          right: "65px"
        }
      }
    },
    '(prefers-reduced-motion)': {
      transitionProperty: 'color'
    }
  }
});
