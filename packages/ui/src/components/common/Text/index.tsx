import styled, { css, DefaultTheme } from 'styled-components';

type Variant = 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6' | 'overline' | 'subtitle' | 'body';

function getTextVariantFromTheme(theme: DefaultTheme, variant: Variant) {
  return theme.typography.variants[variant];
}

const TextVariantMap = (variant: Variant) => css`
  font-size: ${({ theme }) => getTextVariantFromTheme(theme, variant).fontSize}px;
  font-weight: ${({ theme }) => getTextVariantFromTheme(theme, variant).fontWeight};
  line-height: ${({ theme }) => getTextVariantFromTheme(theme, variant).lineHeight}px;
  letter-spacing: ${({ theme }) => 
    getTextVariantFromTheme(theme, variant).letterSpacing ? getTextVariantFromTheme(theme, variant).letterSpacing + 'px' : 'normal'};
  text-transform: ${({ theme }) => getTextVariantFromTheme(theme, variant).textTransform || 'none'};
`;

interface StyledTextProps {
  variant?: Variant;
  fontSize?: number;
  fontWeight?: 'bold' | 'semibold' | 'regular'
  lineHeight?: number;
  letterSpacing?: number;
}

const StyledText = styled.span<StyledTextProps>`
  margin: 0;

  ${({ variant }) => variant && TextVariantMap(variant)}

  ${({ fontSize }) => fontSize && css`
    font-size: ${fontSize}px;
  `}

  ${({ fontWeight }) => fontWeight && css`
    font-weight: ${fontWeight};
  `}

  ${({ lineHeight }) => lineHeight && css`
    line-height: ${lineHeight}px;
  `}

  ${({ letterSpacing }) => letterSpacing && css`
    letter-spacing: ${letterSpacing}px;
  `}
`;

interface TextProps {
  children: React.ReactNode;
  as?: React.ElementType;
  fontSize?: number;
  fontWeight?: 'bold' | 'semibold' | 'regular'
  lineHeight?: number;
  letterSpacing?: number;
  variant?: Variant;
}

export default function Text({
  children,
  as = 'span',
  variant,
  ...rest
}: TextProps) {
  return (
    <StyledText
      as={as}
      variant={variant}
      {...rest}
    >
      {children}
    </StyledText>);
}