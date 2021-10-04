import 'styled-components';

declare module 'styled-components' {
  export interface TypographyVariant {
    fontSize: number;
    fontWeight: 400 | 500 | 700;
    lineHeight?: number;
    letterSpacing?: number;
    textTransform?: 'uppercase' | 'lowercase';
  }

  export interface Typography {
    fontFamily: string;
    variants: {
      heading1: TypographyVariant;
      heading2: TypographyVariant;
      heading3: TypographyVariant;
      heading4: TypographyVariant;
      heading5: TypographyVariant;
      heading6: TypographyVariant;
      overline: TypographyVariant;
      subtitle: TypographyVariant;
      body: TypographyVariant;
    };
  }

  export interface DefaultTheme {
    breakpoints: {
      sm: number;
      md: number;
      lg: number;
    };

    colors: {
      primary: { main: string; light: string; };
      white: { main: string; darker: string; darkest: string; };
      black: { main: string; light: string; };
      gray: { main: string };
      error: { main: string; };
    };

    typography: Typography;
  }
}