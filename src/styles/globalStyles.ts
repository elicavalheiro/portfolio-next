import { globalCss } from '../stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$accent1',
    color: '$accent12',
  },

  'body, input, button, textarea': {
    fontFamily: '$ubuntu',
    fontWeight: '$regular',
    fontSize: '$small',
  },
});
