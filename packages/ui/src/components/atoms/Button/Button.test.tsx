import React from 'react';

import user from '@testing-library/user-event';
import { render, screen } from '../../../test-utils';

import Button from '.';

describe('<Button />', () => {
  it('should render default variant', () => {
    render(<Button>Button</Button>);

    const buttonComponent = screen.getByRole('button');

    expect(buttonComponent).toHaveTextContent(/button/i);
  });

  it('should render secondary variant', () => {
    render(<Button variant="secondary">Button</Button>);

    const buttonComponent = screen.getByRole('button');

    expect(buttonComponent).toHaveTextContent(/button/i);
  });

  it('should render tertiary variant', () => {
    render(<Button variant="tertiary">Button</Button>);

    const buttonComponent = screen.getByRole('button');

    expect(buttonComponent).toHaveTextContent(/button/i);
  });

  it('should render disabled', () => {
    const onChangeMock = jest.fn();

    render(<Button disabled>Button</Button>);

    const buttonComponent = screen.getByRole('button');
    user.click(buttonComponent);

    expect(buttonComponent).toHaveTextContent(/button/i);
    expect(onChangeMock).not.toHaveBeenCalled();
  });

  it('should render with responsive width', () => {
    render(<Button widthBehavior="grow">Button</Button>);

    const buttonComponent = screen.getByRole('button');

    expect(buttonComponent).toHaveTextContent(/button/i);
    expect(buttonComponent).toHaveStyle('width: 100%');
  });
});