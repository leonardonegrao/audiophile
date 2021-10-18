import React from 'react';

import { IconName, icons } from '.';

import theme from '../../../theme';

type PredefinedColor = 'light' | 'dark' | 'primary';

interface IconProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * Width in pixels.
   */
  size?: number;
  /**
   * Color of the icon. Predefined colors include a light variant, dark variant, and primary variant.
   * Custom colors should be provided as a hex value.
   */
  color?: string | PredefinedColor;
  /**
   * Name of the icon.
   */
  icon: IconName;
  alt: string;
}

export default function Icon({  size = 24, color = 'dark', icon, alt }: IconProps) {
  const colorResolver = (color: PredefinedColor | string) => {
    const predefinedColors: { [K in PredefinedColor]: string } = {
      light: theme.colors.white.main,
      dark: theme.colors.black.light,
      primary: theme.colors.primary.main,
    };

    const isOfPredefinedColor = Object.keys(predefinedColors).includes(color as PredefinedColor);
    return isOfPredefinedColor ? predefinedColors[color as PredefinedColor] : color;
  };

  const IconVariant = icons[icon];
  const colorHex = colorResolver(color);

  return (
    <span>
      <IconVariant size={size} color={colorHex} alt={alt} />
    </span>
  );
}