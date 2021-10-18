import React from 'react';

import { render, screen } from '../../../test-utils';

import CategoryContainer from '.';

describe('<CategoryContainer />', () => {
  it('should render component', () => {
    const category = {
      id: '1',
      title: 'Category',
      slug: 'category',
      image: { id: '1', url: 'image.jpg' },
    };

    render(<CategoryContainer {...category} />);

    const categoryElement = screen.getByText('Category');

    expect(categoryElement).toBeInTheDocument();
  });
});