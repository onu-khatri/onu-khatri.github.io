import { style } from "@vanilla-extract/css";

export const timeLineItemStyle = style({
  position: "relative",
  marginBottom: "calc(18px + 5vh)",
  selectors: {
    '&:last-child:before': {
      content: "initial"
    }
  }
})

export const IconStyle = style({
  top: "12px",
  position: "absolute",
  color: "#151515",
  background: "#324454",
  borderRadius: "50%",
  textAlign: "center",
  left: "30px",
  margin: "0 0 0 -25px",

  '@media': {
    'screen and (max-width: 768px)': {
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
  margin: "0 0 0 120px",
  padding: "10px 30px 5px",
  position: "relative",
  borderRadius: "5px",
  minHeight: "150px",
  boxShadow: "inset 3px 1px 10px -5px #48abe0",

  selectors: {
    '&:after': {
      right: "100.3%",
      border: "solid transparent",
      content: " ",
      height: 0,
      width: 0,
      position: "absolute",
      pointerEvents: "none",
      borderRightColor: "#206990",
      borderWidth: "24px",
      top: "28px",
      boxShadow: "4px 0px 1px -2px #48abe0"
    },
  },

  '@media': {
    'screen and (max-width: 768px)': {
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
