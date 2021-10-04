import user from '@testing-library/user-event';
import { render, screen } from '../../../test-utils';

import { RadioField } from '.';

describe('<RadioField />', () => {
  it('should render component', () => {
    render(
      <RadioField.RadioGroup>
        <RadioField.Radio value="1">Option 1</RadioField.Radio>
        <RadioField.Radio value="2">Option 2</RadioField.Radio>
        <RadioField.Radio value="3">Option 3</RadioField.Radio>
      </RadioField.RadioGroup>
    );
    
    const radioGroupElement = screen.getByRole('radiogroup');

    expect(radioGroupElement).toBeInTheDocument();
  });

  it('should trigger onChange when clicked', () => {
    const onChangeMock = jest.fn();
    
    render(
      <RadioField.RadioGroup onChange={onChangeMock}>
        <RadioField.Radio value="1">Option 1</RadioField.Radio>
        <RadioField.Radio value="2">Option 2</RadioField.Radio>
        <RadioField.Radio value="3">Option 3</RadioField.Radio>
      </RadioField.RadioGroup>
    );

    const optionElement = screen.getByText('Option 1');
    user.click(optionElement);

    expect(onChangeMock).toHaveBeenCalled();
  });
});