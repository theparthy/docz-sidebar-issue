import colors from './colors';
import { darken } from 'polished';

const buildBtn = (fontColor, backgroundColor, borderColor) => ({
  color: fontColor,
  backgroundColor: backgroundColor,
  border: `1px solid ${borderColor}`,
  svg: {
    fill: fontColor,
  },
  '&:hover': {
    backgroundColor: darken(0.1, backgroundColor),
    borderColor: darken(0.1, borderColor),
  },
  '&:focus': {
    backgroundColor: darken(0.2, backgroundColor),
    borderColor: darken(0.2, borderColor),
  },
  '&:active': {
    backgroundColor: darken(0.3, backgroundColor),
    borderColor: darken(0.3, borderColor),
  },
  '&:disabled': {
    opacity: 0.5,
  },
});

export default {
  primary: buildBtn(colors.black, colors.calcSinter, colors.black),
  secondary: buildBtn(colors.white, colors.red, colors.red),
};
