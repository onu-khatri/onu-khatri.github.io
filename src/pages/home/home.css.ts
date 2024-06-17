import { style } from "@vanilla-extract/css"

export const homeContainer = style({
position: "relative",
width:'100%',
margin: "0 5vw",

'@media': {
    'screen and (max-width: 480px)': {
      margin: 0
    }
  }
})