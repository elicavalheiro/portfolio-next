import {
  purpleDark,
  yellowDark,
  mauveDark,
  blueDark,
  pinkDark,
  greenDark,
  blackA,
  redDark,
} from '@radix-ui/colors';
import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...purpleDark,
      ...yellowDark,
      ...mauveDark,
      ...blueDark,
      ...pinkDark,
      ...greenDark,
      ...blackA,
      ...redDark,

      accent1: '$mauve1',
      accent2: '$mauve2',
      accent3: '$mauve3',
      accent4: '$mauve4',
      accent5: '$mauve5',
      accent6: '$mauve6',
      accent7: '$mauve7',
      accent8: '$mauve8',
      accent9: '$mauve9',
      accent10: '$mauve10',
      accent11: '$mauve11',
      accent12: '$mauve12',

      white: '#fff',
    },

    fonts: {
      ubuntu: 'Ubuntu, sans-serif',
      alegreya: 'Alegreya Sans SC, sans-serif',
    },

    space: {
      none: '0px',
      small1: '4px',
      small2: '8px',
      small3: '12px',
      medium1: '16px',
      medium2: '20px',
      medium3: '24px',
      large1: '32px',
      large2: '40px',
      large3: '48px',
    },

    sizes: {
      none: '0px',
      small1: '4px',
      small2: '8px',
      small3: '12px',
      medium1: '16px',
      medium2: '20px',
      medium3: '24px',
      large1: '32px',
      large2: '40px',
      large3: '48px',
    },

    fontSizes: {
      xsmall1: '12px',
      xsmall2: '14px',
      xsmall3: '16px',
      small1: '18px',
      small2: '20px',
      small3: '22px',
      medium1: '24px',
      medium2: '26px',
      medium3: '28px',
      large1: '32px',
      large2: '40px',
      large3: '48px',
    },

    fontWeights: {
      regular: '400',
      semiBold: '600',
      bold: '700',
      extraBold: '900',
    },

    radii: {
      none: '0px',
      small: '5px',
      medium: '10px',
      large: '15px',
      circle: '50%',
    },

    shadows: {
      card: '0 2px 8px rgba(0,0,0,0.12)',
    },

    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '9999999999',
    },

    transitions: {},

    lineHeights: {},

    letterSpacings: {},

    borderWidths: {},

    borderStyles: {},
  },

  media: {
    sm: '(min-width: 320px)',
    md: '(min-width: 640px)',
    lg: '(min-width: 1024px)',
  },

  utils: {
    m: (value: string | number) => ({
      margin: value,
    }),

    mt: (value: string | number) => ({
      margintTop: value,
    }),

    mb: (value: string | number) => ({
      margintBottom: value,
    }),

    ml: (value: string | number) => ({
      margintLeft: value,
    }),

    mr: (value: string | number) => ({
      marginRight: value,
    }),

    mx: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),

    my: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),

    br: (value: string | number) => ({
      borderRadius: value,
    }),

    size: (value: string | number) => ({
      width: value,
      height: value,
    }),

    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
});

export type CSS = Stitches.CSS<typeof config>;
