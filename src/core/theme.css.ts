import { createGlobalTheme } from '@vanilla-extract/css';

import {
  colors,
  contentWidth,
  fonts,
  fontWeights,
  radii,
  shadows,
  sizes,
  space,
} from './tokens';

export const vars = createGlobalTheme(':root', {
  fonts,
  fontWeights,
  space,
  sizes,
  radii,
  contentWidth,
  colors,
  shadows,
});