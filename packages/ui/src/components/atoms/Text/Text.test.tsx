import React from 'react';

import { render, screen } from '../../../test-utils';

import Text from '.';

describe('<Text />', () => {
  it('should render component', () => {
    render(<Text>Hello World</Text>);

    const textEl = screen.getByText('Hello World');
    
    expect(textEl).toBeInTheDocument();
  });

  it('should render component as variant', () => {
    render(<Text variant='heading1'>Hello World</Text>);

    const textEl = screen.getByText('Hello World');

    expect(textEl).toHaveStyle('font-size: 56px');
  });

  it('should apply personalized style', () => {
    render(
      <Text
        fontSize={100}
        fontWeight="regular"
        lineHeight={100}
        letterSpacing={12}
      >
        Hello World
      </Text>
    );

    const textEl = screen.getByText('Hello World');

    expect(textEl).toHaveStyle('font-size: 100px');
    expect(textEl).toHaveStyle('font-weight: regular');
    expect(textEl).toHaveStyle('line-height: 100px');
    expect(textEl).toHaveStyle('letter-spacing: 12px');
  });
});