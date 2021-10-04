import { DefaultTheme, Typography } from 'styled-components';

const breakpoints = {
  sm: 375,
  md: 768,
  lg: 1440,
};

const colors = {
  primary: {
    main: '#D87D4A',
    light: '#FBAF85',
  },
  white: {
    main: '#FFFFFF',
    darker: '#FAFAFA',
    darkest: '#F1F1F1',
  },
  black: {
    main: '#000000',
    light: '#101010',
  },
  gray: {
    main: '#CFCFCF',
  },
  error: {
    main: '#CD2C2C',
  },
};

const typography: Typography = {
  fontFamily: 'Manrope',
  variants: {
    heading1: {
      fontSize: 56,
      fontWeight: 700,
      lineHeight: 58,
      letterSpacing: 2,
      textTransform: 'uppercase'
    },
    heading2: {
      fontSize: 40,
      fontWeight: 700,
      lineHeight: 44,
      letterSpacing: 1.5,
      textTransform: 'uppercase'
    },
    heading3: {
      fontSize: 32,
      fontWeight: 700,
      lineHeight: 36,
      letterSpacing: 1.15,
      textTransform: 'uppercase'
    },
    heading4: {
      fontSize: 28,
      fontWeight: 700,
      lineHeight: 38,
      letterSpacing: 2,
      textTransform: 'uppercase'
    },
    heading5: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: 33,
      letterSpacing: 1.7,
      textTransform: 'uppercase'
    },
    heading6: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 24,
      letterSpacing: 1.3,
      textTransform: 'uppercase'
    },
    overline: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 19,
      letterSpacing: 10,
      textTransform: 'uppercase'
    },
    subtitle: {
      fontSize: 13,
      fontWeight: 700,
      lineHeight: 25,
      letterSpacing: 1,
      textTransform: 'uppercase'
    },
    body: {
      fontSize: 15,
      fontWeight: 500,
      lineHeight: 25,
    },
  },
};

const theme: DefaultTheme = { colors, typography, breakpoints };

export default theme;