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
    render(<NumberField value={1} />);

    const addButton = screen.getByText('+');
    user.click(addButton);

    const value = screen.getByText('2');

    expect(value).toBeInTheDocument();
  });

  it('should decrease value when add button clicked', () => {
    render(<NumberField value={5} />);

    const subtractButton = screen.getByText('-');
    user.click(subtractButton);

    const value = screen.getByText('4');

    expect(value).toBeInTheDocument();
  });

  it('should not decrease value when value is already zero', () => {
    render(<NumberField value={0} />);

    const subtractButton = screen.getByText('-');
    user.click(subtractButton);

    const value = screen.getByText('0');

    expect(value).toBeInTheDocument();
  });

  it('should execute onChange callback', () => {
    const value = 1;
    const onChangeMock = jest.fn();
    
    render(<NumberField value={value} onChange={onChangeMock} />);

    const addButton = screen.getByText('+');
    const subtractButton = screen.getByText('-');
    
    user.click(addButton);
    user.click(subtractButton);

    expect(onChangeMock).toHaveBeenCalledTimes(2);
  });
});