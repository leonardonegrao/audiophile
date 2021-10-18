import React from 'react';

import { render, screen } from '../../../../../test-utils';
import user from '@testing-library/user-event';

import CartItem from '.';

describe('<CartItem />', () => {
  it('should render component', () => {
    const { item, onChange } = {
      item: {
        id: '1',
        product: {
          id: '1',
          name: 'Product 1',
          price: 100,
        },
        quantity: 1,
      },
      onChange: jest.fn(),
    };
    
    render(<CartItem item={item} onChange={onChange} />);

    const productTitleElement = screen.getByText('Product 1');

    expect(productTitleElement).toBeInTheDocument();
  });

  it('should change item quantity', () => {
    const { item, onChange } = {
      item: {
        id: '1',
        product: {
          id: '1',
          name: 'Product 1',
          price: 100,
        },
        quantity: 1,
      },
      onChange: jest.fn(),
    };
    
    render(<CartItem item={item} onChange={onChange} />);

    const productsNumberFieldButton = screen.getByText('+');
    user.click(productsNumberFieldButton);

    expect(onChange).toHaveBeenCalledWith(item.id, item.quantity + 1);
  });
});