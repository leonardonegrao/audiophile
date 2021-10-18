import React from 'react';
import styled from 'styled-components';

import Text from '../../../../atoms/Text';
import NumberField from '../../../../atoms/NumberField';

import { CartItem as ICartItem } from '../..';

const StyledCartItem = styled.li`
  display: flex;
  align-items: center;
  
  .cart-item-image {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 64px;
    height: 64px;

    background: ${({ theme }) => theme.colors.white.darkest};
    border-radius: 8px;
  }

  .cart-item-info {
    margin-left: 16px;

    span {
      display: block;
    }

    span.cart-item-price {
      opacity: 0.5;
    }
  }

  .cart-item-actions {
    width: 96px;
    height: 32px;

    margin-left: auto;
  }
`;

interface CartItemProps {
  item: ICartItem;
  onChange: (itemId: string, quantity: number) => void;
}

export default function CartItem({ item, onChange }: CartItemProps) {
  return (
    <StyledCartItem>
      <div className="cart-item-image">
        <img src={item.product.imageUrl} alt={item.product.name} height="40px" />
      </div>

      <div className="cart-item-info">
        <Text variant="body" fontWeight={700}>{item.product.name}</Text>
        <Text
          className="cart-item-price"
          variant="body"
          fontWeight={700}
        >$ {item.product.price}</Text>
      </div>

      <div className="cart-item-actions">
        <NumberField value={item.quantity} onChange={(quantity) => onChange(item.id, quantity)} />
      </div>
    </StyledCartItem>
  );
}
