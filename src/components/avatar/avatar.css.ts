import {violet, whiteA} from "@radix-ui/colors";
import { style } from '@vanilla-extract/css';

export const avatarRoot = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  borderRadius: '5%',
  backgroundColor: whiteA.whiteA12,
  border: `${whiteA.whiteA12} 2px solid`
});

export const avatarRound = style({
  borderRadius: '100%'
});

export const avatarImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit"
})

export const avatarFallback = style({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  color: violet.violet11,
  fontSize: "15px",
  lineHeight: "1",
  fontWeight: "500"
})
