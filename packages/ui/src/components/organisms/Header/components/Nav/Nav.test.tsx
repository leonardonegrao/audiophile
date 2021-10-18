import React from 'react';

import { render, screen } from '../../../../../test-utils';

import Nav from '.';

describe('<Nav />', () => {
  it('should render component', () => {
    const categories = [
      { id: '1', title: 'Category 1', slug: 'category-1', image: { id: '1', url: 'image.jpg' } },
      { id: '2', title: 'Category 2', slug: 'category-2', image: { id: '2', url: 'image-2.jpg' } },
    ];

    render(
      <Nav categories={categories} />,
    );

    const navElement = screen.getByRole('navigation', { hidden: true });

    expect(navElement).toBeInTheDocument();
  });
});