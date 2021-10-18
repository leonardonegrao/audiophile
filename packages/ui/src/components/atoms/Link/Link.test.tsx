import React from 'react';

import { render, screen } from '../../../test-utils';
import { render as noProviderRender } from '@testing-library/react';

import Link from '.';

describe('<Link />', () => {
  it('should render component', () => {
    render(<Link to="/">Redirect</Link>);

    const linkElement = screen.getByText('Redirect');

    expect(linkElement).toBeInTheDocument();
  });

  it('should throw error if no Link provider is defined', () => {
    // supress error message
    jest.spyOn(console, 'error').mockImplementation(() => jest.fn());

    expect(() => noProviderRender(<Link to="/">Redirect</Link>))
      .toThrow('Link provider is not configured. Use the UIProvidersContext to setup a provider!');

    jest.restoreAllMocks();
  });
});