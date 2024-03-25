import { position } from "polished";
import { vars } from "./vars.css";

export const unresponsiveProperties = {
  overflow: ['hidden', 'scroll', 'visible', 'auto'],
  userSelect: ['none'],
  outline: ['none'],
  opacity: [0],
  zIndex: {
    0: 0,
    1: 1,
    2: 2,
    dropdownBackdrop: 90,
    dropdown: 100,
    sticky: 200,
    modalBackdrop: 290,
    modal: 300,
    notification: 400,
  },
  cursor: ['default', 'pointer'],
  pointerEvents: ['none'],
  top: [0],
  position:['absolute', 'relative', 'sticky'],
  bottom: [0],
  left: [0],
  right: [0],
  height: [0],
  width: {
    ...vars.width
  },
  minWidth: {
    0: '0%',
  },
  maxWidth: [0],
  transition: [0],
} as const;

export type UnresponsiveProperties = keyof typeof unresponsiveProperties;