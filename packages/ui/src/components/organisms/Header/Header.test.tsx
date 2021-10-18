import React from 'react';
import Header from '.';

import { render, screen } from '../../../test-utils';

describe('<Header />', () => {
  it('should render component', () => {
    const categories = [
      { id: '1', title: 'Category 1', slug: 'category-1', image: { id: '1', url: 'image.jpg' } },
      { id: '2', title: 'Category 2', slug: 'category-2', image: { id: '2', url: 'image-2.jpg' } },
    ];
    const order = {
      id: '1', 
      items: [{
        id: '1',
        product: {
          id: '1',
          name: 'Product 1',
          price: 100,
        },
        quantity: 1,
      },], 
      total: 0, 
      onChange: jest.fn()
    };

    render(<Header categories={categories} order={order} />);

    const headerElement = screen.getByRole('region');

    expect(headerElement).toBeInTheDocument();
  });
});