import React from 'react';

import { render, screen } from '../../../test-utils';

import Logo from '.';

describe('<Logo />', () => {
  it('should render component', () => {
    render(<Logo />);

    const logoElement = screen.getByTitle('audiophile');

    expect(logoElement).toBeInTheDocument();
  });

  it('should render component with specified size', () => {
    render(<div data-testid="logo-wrapper"><Logo size={40} /></div>);
    
    const logoWrapper = screen.getByTestId('logo-wrapper');

    expect(logoWrapper).toMatchSnapshot();
  });
});