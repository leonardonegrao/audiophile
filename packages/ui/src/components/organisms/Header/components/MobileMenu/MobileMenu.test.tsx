import React from 'react';

import { render, screen } from '../../../../../test-utils';
import user from '@testing-library/user-event';

import MobileMenu from '.';

describe('<MobileMenu />', () => {
  it('should render component', () => {    
    render(
      <MobileMenu>
        <p>Children</p>
      </MobileMenu>
    );

    const menuIcon = screen.getByTitle('Open menu');

    expect(menuIcon).toBeInTheDocument();
  });

  it('should toggle overlay', () => {    
    render(
      <MobileMenu>
        <p>Children</p>
      </MobileMenu>
    );

    const menuIcon = screen.getByTitle('Open menu');
    user.click(menuIcon);

    const childrenElement = screen.getByText('Children');

    expect(childrenElement).toBeInTheDocument();
  });
});