import user from '@testing-library/user-event';
import { render, screen } from '../../../test-utils';
import TextField, { TextFieldProps } from '.';

describe('<TextField />', () => {
  it('should render component', () => {
    const textFieldProps: TextFieldProps = {
      label: 'Username',
      fieldName: 'username',
      placeholder: 'Insert your name'
    };

    render(<TextField {...textFieldProps} />);

    const textFieldComponent = screen.getByLabelText(textFieldProps.label!);

    expect(textFieldComponent).toBeInTheDocument();
  });

  it('should update value on user input', () => {
    const onChangeMock = jest.fn();

    const textFieldProps: TextFieldProps = {
      label: 'Username',
      fieldName: 'username',
      placeholder: 'Insert your name',
      value: '',
      onChange: onChangeMock,
    };

    render(<TextField {...textFieldProps} />);

    const textFieldInput = screen.getByPlaceholderText(textFieldProps.placeholder!);
    const valueToType = 'someusername';

    user.type(textFieldInput, valueToType);

    expect(onChangeMock).toHaveBeenCalledTimes(valueToType.length);
  });

  it('should render invalid message if is invalid', () => {
    const invalidMessage = 'Username should begin with letter';

    const textFieldProps: TextFieldProps = {
      label: 'Username',
      fieldName: 'username',
      placeholder: 'Insert your name',
      value: '!someusername',
      onChange: () => {},
      isInvalid: true,
      invalidMessage,
    };

    render(<TextField {...textFieldProps} />);

    const invalidMessageElement = screen.getByText(invalidMessage);

    expect(invalidMessageElement).toBeInTheDocument();
  });

  it('should render disabled message if is disabled', () => {
    const disabledMessage = 'You need to agree with the terms of service first';

    const textFieldProps: TextFieldProps = {
      label: 'Username',
      fieldName: 'username',
      placeholder: 'Insert your name',
      disabled: true,
      disabledMessage,
    };

    render(<TextField {...textFieldProps} />);

    const input = screen.getByTitle(disabledMessage);

    expect(input).toBeInTheDocument();
  });
});