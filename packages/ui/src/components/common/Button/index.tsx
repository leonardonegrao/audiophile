import React from 'react';
import styled from 'styled-components';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  /**
   * The variant of the button, defaults to primary.
   */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Checks if the button should be disabled.
   */
  disabled?: boolean;
  /**
   * Handles how the width should be defined. `fixed` sets it to 160px, `grow` sets it to 100% (parent defines width).
   */
  widthBehavior?: 'fixed' | 'grow';
  /**
   * Content to be displayed inside the button.
   */
  children: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ widthBehavior }) => widthBehavior === 'fixed' ? '160px' : '100%'};
  height: 48px;
  box-sizing: border-box;
  border: ${({ theme, variant }) => variant === 'secondary' ? `1px solid ${theme.colors.black.main}` : 'none'};
  border-radius: 0;
  outline: none;

  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.variants.subtitle.fontSize}px;
  font-weight: ${({ theme }) => theme.typography.variants.subtitle.fontWeight};
  line-height: 17.76px;
  letter-spacing: ${({ theme }) => theme.typography.variants.subtitle.letterSpacing}px;
  text-transform: ${({ theme }) => theme.typography.variants.subtitle.textTransform};
  
  background: ${({ theme, variant }) => variant === 'primary' ? theme.colors.primary.main : 'transparent'};
  color: ${({ theme, variant }) => variant === 'primary' ? theme.colors.white.main : theme.colors.black.main};
  span {
    opacity: ${({ variant }) => variant === 'tertiary' ? 0.5 : 1};
  }

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover:enabled {
    background: ${({ theme, variant }) => {
    if (variant === 'primary') return theme.colors.primary.light;
    if (variant === 'secondary') return theme.colors.black.main;
    return 'transparent';
  }};
    color: ${({ theme, variant }) => variant === 'tertiary' ? theme.colors.primary.main : theme.colors.white.main};
    span {
      opacity: 1;
    }
  }

  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;

    transition: none;
  }
`;

const StyledArrowIcon = styled.div`
  margin-left: 13.32px;
`;

function ArrowIcon() {
  return (
    <StyledArrowIcon>
      <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" strokeWidth="2"/>
      </svg>
    </StyledArrowIcon>
  );
}

/**
 * Main button component, with all the variants available. Besides the custom arguments it receives, it also
 * supports all the common HTML attributes for a button.
 */
export default function Button({
  variant = 'primary',
  widthBehavior = 'fixed',
  disabled = false,
  children,
  ...rest
}: ButtonProps) {
  return (
    <StyledButton variant={variant} widthBehavior={widthBehavior} disabled={disabled} {...rest}>
      <span>{children}</span> {variant === 'tertiary' && <ArrowIcon />}
    </StyledButton>
  );
}
