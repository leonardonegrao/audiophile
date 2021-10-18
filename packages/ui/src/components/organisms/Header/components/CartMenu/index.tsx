import React from 'react';
import styled from 'styled-components';

import Icon from '../../../../atoms/Icon';
import Text from '../../../../atoms/Text';
import Button from '../../../../atoms/Button';

const StyledCartMenu = styled.div`
  button.toggle {
    padding: 8px;
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-left: auto;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    position: relative;
    margin-left: 0;
  }
`;

const OverlayBackground = styled.div`
  position: absolute;
  top: 104px;
  left: 0;

  width: 100%;
  height: calc(100vh - 104px);

  background: rgba(0, 0, 0, 0.4);
`;

const Overlay = styled.div`
  position: absolute;
  z-index: 3;
  top: 104px;
  left: 0;

  width: 100%;
  padding: 24px;

  .overlay-content {
    width: 100%;
    padding: 24px 32px;

    border-radius: 8px;

    background: #fff;

    .overlay-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 32px;

      span {
        text-decoration: underline;
        opacity: 0.5;
        cursor: pointer;
      }
    }

    .overlay-body {
      li + li {
        margin-top: 24px;
      }
    }

    .overlay-footer {
      .overlay-footer-total {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-top: 32px;
        margin-bottom: 24px;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: flex;
    flex-direction: column;
    align-items: end;

    .overlay-content {
      max-width: 377px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    top: 84px;
    right: 0;
    left: auto;
    padding-right: 0;

    width: 377px;
  }
`;

interface CartMenuProps {
  children: React.ReactNode;
  orderTotal: number;
  itemsQuantity: number;
  onRemoveAll?: () => void;
}

export default function CartMenu({ children, orderTotal, itemsQuantity, onRemoveAll }: CartMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen((current) => !current);

  return (
    <>
      <StyledCartMenu>
        <button className="toggle" onClick={toggle}>
          <Icon
            size={23}
            color="light"
            icon="cart"
            alt={isOpen ? 'Close cart' : 'Open cart'}
          />
        </button>

        {isOpen && (
          <Overlay>
            {itemsQuantity > 0 ? (
              <div className="overlay-content">
                <div className="overlay-header">
                  <Text
                    as="h6"
                    variant="heading6"
                  >
                Cart ({itemsQuantity})
                  </Text>
                  <Text
                    as="span"
                    variant="body"
                    fontSize={15}
                    fontWeight={200}
                    onClick={onRemoveAll}
                  >
                Remove all
                  </Text>
                </div>
            
                <ul className="overlay-body">
                  {children}
                </ul>

                <div className="overlay-footer">
                  <div className="overlay-footer-total">
                    <Text
                      variant="body"
                      fontWeight={200}
                      textTransform="uppercase"
                      opacity={0.5}
                    >
                  Total
                    </Text>
                    <Text variant="heading6">$ {orderTotal}</Text>
                  </div>

                  <Button widthBehavior="grow">Checkout</Button>
                </div>
              </div>
            ) : (
              <div className="overlay-content">
                <Text variant="heading6" lineHeight={56}>
                Your cart is empty
                </Text>

                <Button widthBehavior="grow">Go shopping</Button>
              </div>
            )}
          </Overlay>
        )}
      </StyledCartMenu>
      {isOpen && <OverlayBackground onClick={toggle} />}
    </>
  );
}