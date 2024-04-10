import type { ConditionalValue } from '@vanilla-extract/sprinkles';
import {
  defineProperties,
  createSprinkles,
  createMapValueFn,
} from '@vanilla-extract/sprinkles';

import { responsiveProperties } from './responsive-properties';
import { breakpointNames, breakpoints } from './breakpoint';
import { vars } from './theme.css';

const responsiveAtomicProperties = defineProperties({
  defaultCondition: 'mobile',
  conditions: {
    mobile: {},
    tablet: {
      '@media': `screen and (min-width: ${breakpoints.tablet}px)`,
    },
    desktop: {
      '@media': `screen and (min-width: ${breakpoints.desktop}px)`,
    },
    wide: {
      '@media': `screen and (min-width: ${breakpoints.wide}px)`,
    },
  },
  responsiveArray: breakpointNames,
  properties: responsiveProperties,
  shorthands: {
    padding: ['paddingBottom', 'paddingTop', 'paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    paddingX: ['paddingLeft', 'paddingRight'],
    margin: ['marginBottom', 'marginTop', 'marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    marginX: ['marginLeft', 'marginRight'],
  },
});


export type ResponsiveValue<Value extends string | number> = ConditionalValue<
  typeof responsiveAtomicProperties,
  Value
>;
export const mapResponsiveValue = createMapValueFn(responsiveAtomicProperties);

const colorProperties = defineProperties({
  properties: {
    color: vars.colors,
    background: vars.colors,
    borderColor: vars.colors,
  },
});

const unconditionalProperties = defineProperties({
  properties: {
    flexWrap: ['wrap', 'nowrap'],
    top: [0],
    bottom: [0],
    left: [0],
    right: [0],
    zIndex: [-1, 0, 1],
    width: vars.sizes,
    height: vars.sizes,
    borderRadius: vars.radii,
    cursor: ['pointer'],
    textDecoration: ['none', 'underline', 'line-through'],
    textTransform: ['uppercase', 'lowercase', 'capitalize'],
    textAlign: ['left', 'center', 'right'],
    textOverflow: ['ellipsis'],
    overflow: ['hidden'],
    whiteSpace: ['nowrap'],
    boxShadow: vars.shadows,
  },
});

export const sprinkles = createSprinkles(
  responsiveAtomicProperties,
  colorProperties,
  unconditionalProperties
);