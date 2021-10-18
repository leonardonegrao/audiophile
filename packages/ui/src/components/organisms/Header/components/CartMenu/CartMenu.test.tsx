import React from 'react';

import { render, screen } from '../../../../../test-utils';
import user from '@testing-library/user-event';

import CartMenu from '.';

describe('<CartMenu />', () => {
  it('should render component', () => {
    const { orderTotal, itemsQuantity } = { orderTotal: 525.50, itemsQuantity: 4 };
    
    render(
      <CartMenu orderTotal={orderTotal} itemsQuantity={itemsQuantity}>
        <p>Children</p>
      </CartMenu>
    );

    const cartIcon = screen.getByTitle('Open cart');

    expect(cartIcon).toBeInTheDocument();
  });

  it('should toggle overlay', () => {
    const { orderTotal, itemsQuantity } = { orderTotal: 525.50, itemsQuantity: 4 };
    
    render(
      <CartMenu orderTotal={orderTotal} itemsQuantity={itemsQuantity}>
        <p>Children</p>
      </CartMenu>
    );

    const cartIcon = screen.getByTitle('Open cart');
    user.click(cartIcon);
    const updatedCartIcon = screen.getByTitle('Close cart');

    expect(updatedCartIcon).toBeInTheDocument();
  });

  it('should display empty state when items quantity be 0', () => {
    const { orderTotal, itemsQuantity } = { orderTotal: 0, itemsQuantity: 0 };
    
    render(
      <CartMenu orderTotal={orderTotal} itemsQuantity={itemsQuantity}>
        <p>Children</p>
      </CartMenu>
    );

    const cartIcon = screen.getByTitle('Open cart');
    user.click(cartIcon);

    const emptyCartElement = screen.getByText('Your cart is empty');

    expect(emptyCartElement).toBeInTheDocument();
  });

  it('should display children when items quantity > 0', () => {
    const { orderTotal, itemsQuantity } = { orderTotal: 525.50, itemsQuantity: 4 };
    
    render(
      <CartMenu orderTotal={orderTotal} itemsQuantity={itemsQuantity}>
        <p>Children</p>
      </CartMenu>
    );

    const cartIcon = screen.getByTitle('Open cart');
    user.click(cartIcon);

    const childrenElement = screen.getByText('Children');

    expect(childrenElement).toBeInTheDocument();
  });

  it('should call onRemoveAll()', () => {
    const { orderTotal, itemsQuantity } = { orderTotal: 525.50, itemsQuantity: 4 };
    const onRemoveAll = jest.fn();
    
    render(
      <CartMenu
        orderTotal={orderTotal}
        itemsQuantity={itemsQuantity}
        onRemoveAll={onRemoveAll}
      >
        <p>Children</p>
      </CartMenu>
    );

    const cartIcon = screen.getByTitle('Open cart');
    user.click(cartIcon);

    const removeAllButton = screen.getByText('Remove all');
    user.click(removeAllButton);

    expect(onRemoveAll).toHaveBeenCalled();
  });
});