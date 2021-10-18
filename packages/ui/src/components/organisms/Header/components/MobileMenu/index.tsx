import React from 'react';
import styled from 'styled-components';

import Icon from '../../../../atoms/Icon';

const StyledMobileMenu = styled.div`
  button.toggle {
    padding: 8px;
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-right: 42px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    display: none;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 98px;
  left: 0;
  z-index: 3;

  display: flex;
  flex-direction: column;
  
  width: 100vw;
  padding: 32px 24px;
  
  background: ${({ theme }) => theme.colors.white.main};
  border-radius: 0 0 8px 8px;

  div + div {
    margin-top: 16px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex-direction: row;
    padding: 56px 40px;

    div + div {
      margin-top: 0;
      margin-left: 10px;
    }
  }
`;

export default function MobileMenu({ children, ...rest }: React.ComponentPropsWithoutRef<'div'>) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen((current) => !current);

  return (
    <StyledMobileMenu {...rest}>
      <button className="toggle" onClick={toggle}>
        <Icon size={16} color="light" icon="menu" alt={isOpen ? 'Close menu' : 'Open menu'} />
      </button>

      {isOpen && <Overlay>{children}</Overlay>}
    </StyledMobileMenu>
  );  
}