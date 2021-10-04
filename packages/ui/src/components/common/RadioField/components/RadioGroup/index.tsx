import styled from 'styled-components';
import { RadioContext } from '../../RadioContext';
import { StyledRadio } from '../Radio';
import { useState } from 'react';

interface StyledRadioGroupProps {
  layout: 'row' | 'column';
  widthBehavior: 'fixed' | 'grow';
}

const StyledRadioGroup = styled.fieldset<StyledRadioGroupProps>`
  display: flex;
  gap: 20px;

  flex-direction: ${({ layout }) => layout};
  width: 100%;

  ${StyledRadio} {
    width: ${({ widthBehavior }) => widthBehavior === 'fixed' ? '309px' : '100%'};
  }

  border: none;
  padding: 0;
`;

interface RadioGroupProps extends Omit<React.ComponentPropsWithoutRef<'fieldset'>, 'defaultValue' | 'onChange'> {
  /**
   * Handles how the width should be defined. `fixed` sets it to 309px, `grow` sets it to 100% (parent defines width).
   */
  widthBehavior?: 'fixed' | 'grow';
  /**
   * Sets the direction of the options, stacked or side-by-side.
   */
  layout?: 'row' | 'column';
  /**
   * Optional starting value.
   */
  defaultValue?: string | number;
  /**
   * Optional function that will be executed when value is changed.
   * It receives the new value instead of default `onChange` behavior that receives an `SyntheticEvent`.
   */
  onChange?: (value: string | number) => void;
}

export function RadioGroup({
  widthBehavior = 'fixed',
  layout = 'row',
  children,
  defaultValue,
  onChange,
  ...rest
}: RadioGroupProps) {
  const [value, setValue] = useState(defaultValue);

  function handleChange(newValue: string | number) {
    setValue(newValue);
    
    if (onChange) {
      onChange(newValue);
    }
  }
  
  return (
    <RadioContext.Provider value={{ value, onChange: handleChange }}>
      <StyledRadioGroup layout={layout} widthBehavior={widthBehavior} role="radiogroup" {...rest}>
        {children}
      </StyledRadioGroup>
    </RadioContext.Provider>
  );
}