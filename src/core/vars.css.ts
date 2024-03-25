import { createGlobalTheme } from '@vanilla-extract/css';
import { modularScale } from 'polished';

const createScalePx = (ratio: number, base: number) => (steps: number) =>
  `${modularScale(steps, base, ratio)}px`;

const createScalePercentage = (ratio: number, base: number) => (steps: number) =>
  `${modularScale(steps, base, ratio)}%`;

const createScaleEm = (ratio: number, base: number) => (steps: number) =>
  `${modularScale(steps, base, ratio)}em`;

const spaceScale = createScaleEm(1.2, 1 / 2);
const fontSizeScale = createScaleEm(1.3, 1);
const lineHeightScale = createScalePx(1.25, 24);
const borderRadiusScale = createScalePx(1.5, 4);
const widthPercentage = createScalePercentage(1.4, 5);
const heightPercentage = createScalePercentage(1.4, 5);

const scaleMap = (limit: number, includeReverse: boolean, respectZero: boolean, func: (step: number) => string) => (
  [...Array(limit).keys()].reduce((result, filter) => {
    const zeroOrOne = respectZero ? 0: 1;
    const reduce = includeReverse && filter + zeroOrOne > limit ? (filter - limit + zeroOrOne) * -1 : filter + zeroOrOne;
    result[reduce + 'x'] = reduce < 0 ? `calc(${func(Math.abs(reduce))}*-1)` : func(reduce);
    return result;
  }, {} as { [x: string]: string })
)

export const vars = createGlobalTheme(':root', {
  space: scaleMap(11, true, false, spaceScale),
  height: scaleMap(11, false, false, heightPercentage),
  width: {...scaleMap(11, false, false, widthPercentage), 'full' : '100%'},
  lineHeight: scaleMap(11, false, true, lineHeightScale),
  color: {
    core10: '#F7F3F6',
    core20: '#E6D3E4',
    core30: '#AF78B4',
    core40: '#A05EA6',
    core50: '#934398',
    core60: '#7F187F',
    core70: '#691568',
    core80: '#480D4A',
    black10: '#F5F5F5',
    black20: '#D1D1D6',
    black30: '#93939A',
    black40: '#777279',
    black50: '#646266',
    black60: '#4D4A4F',
    black70: '#363438',
    black80: '#211E22',
  },
  borderRadius: scaleMap(6, false, true, borderRadiusScale),
  fontFamily: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  fontSize: scaleMap(10, false, false, fontSizeScale),
  transforms: {
    touchable: 'scale(0.97)',
  }
});
