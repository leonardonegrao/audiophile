import React from 'react';

import { render, screen } from '../../../test-utils';
import user from '@testing-library/user-event';

import RadioField, { Option } from '.';

describe('<RadioField />', () => {
  it('should render component', () => {
    const radioFieldProps = {
      name: 'demo',
      options: [{ id: 1, label: 'Option 1', value: 1 }, { id: 2, label: 'Option 2', value: 2 },],
      value: 1,
      onChange: (newValue: string | number) => {}
    };

    render(
      <RadioField
        data-testid="radio-field"
        name={radioFieldProps.name}
        options={radioFieldProps.options}
        value={radioFieldProps.value}
        onChange={radioFieldProps.onChange}
      />
    );

    const radioField = screen.getByTestId('radio-field');
    
    expect(radioField).toBeInTheDocument();
  });

  it('should execute onChange callback when option is clicked', () => {
    const onChangeMock = jest.fn();
    const radioFieldProps = {
      name: 'demo',
      options: [{ id: 1, label: 'Option 1', value: 1 }, { id: 2, label: 'Option 2', value: 2 },],
      value: 1,
      onChange: (newValue: string | number) => { onChangeMock(newValue); }
    };

    render(
      <RadioField
        name={radioFieldProps.name}
        options={radioFieldProps.options}
        value={radioFieldProps.value}
        onChange={radioFieldProps.onChange}
      />
    );

    const radioFieldOption = screen.getByText(radioFieldProps.options[1].label);
    user.click(radioFieldOption);

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(radioFieldProps.options[1].value);
  });

  it('should not execute onChange if option is disabled', () => {
    const onChangeMock = jest.fn();
    const radioFieldProps = {
      name: 'demo',
      options: [{ id: 1, label: 'Option 1', value: 1 }, { id: 2, label: 'Option 2', value: 2 },],
      value: 1,
      onChange: (newValue: string | number) => { onChangeMock(newValue); },
      isOptionDisabled: (option: Option) => option.id === 2,
    };

    render(
      <RadioField
        name={radioFieldProps.name}
        options={radioFieldProps.options}
        value={radioFieldProps.value}
        onChange={radioFieldProps.onChange}
        isOptionDisabled={radioFieldProps.isOptionDisabled}
      />
    );

    const radioFieldOption = screen.getByText(radioFieldProps.options[1].label);
    user.click(radioFieldOption);

    expect(onChangeMock).not.toHaveBeenCalled();
  });
});