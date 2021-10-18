import React from 'react';

import user from '@testing-library/user-event';
import { render, screen } from '../../../test-utils';

import NumberField from '.';

describe('<NumberField />', () => {
  it('should render component', () => {
    render(<NumberField value={1} />);

    const numberFieldEl = screen.getByText('1');
    
    expect(numberFieldEl).toBeInTheDocument();
  });

  it('should increase value when add button clicked', () => {
    const { value, onChange } = { value: 1, onChange: jest.fn() };

    render(<NumberField value={value} onChange={onChange} />);

    const addButton = screen.getByText('+');
    user.click(addButton);

    expect(onChange).toHaveBeenNthCalledWith(1, 2);
  });

  it('should decrease value when add button clicked', () => {
    const { value, onChange } = { value: 2, onChange: jest.fn() };
    
    render(<NumberField value={value} onChange={onChange} />);

    const subtractButton = screen.getByText('-');
    user.click(subtractButton);

    expect(onChange).toHaveBeenNthCalledWith(1, 1);
  });
});