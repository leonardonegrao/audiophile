import React from 'react';

import { render, screen } from '../../../test-utils';

import Icon, { icons, IconName } from '.';

describe('<Icon />', () => {
  it('should render component', () => {
    render(<Icon icon="menu" alt="Menu" color="#CFCFCF" />);

    const iconElement = screen.getByTitle('Menu');

    expect(iconElement).toBeInTheDocument();
  });

  it('should render component in all its variants', () => {
    const variants = Object.keys(icons) as IconName[];
    
    render(
      <>{variants.map((variant) => <Icon key={variant} icon={variant} alt={variant} />)}</>
    );

    const iconElements = variants.map((variant) => screen.getByTitle(variant));
    
    expect(iconElements).toHaveLength(variants.length);
  });
});