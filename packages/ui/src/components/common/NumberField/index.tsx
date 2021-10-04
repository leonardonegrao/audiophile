import { useState } from 'react';
import styled from 'styled-components';

const StyledNumberField = styled.div`
  display: flex;
  
  height: 48px;
  width: 120px;
  background: #F1F1F1;

  font-size: 13px;

  button {
    border: none;
    height: 100%;
    width: 33%;

    opacity: 25%;

    cursor: pointer;

    &:hover {
      opacity: 100%;
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 33%;

    font-weight: 700;
  }
`;

interface NumberFieldProps {
  /**
   * Initial value. This value is not updated directly, must be updated with `onChange`.
   */
  value: number;
  /**
   * Callback to be executed when user trigger change.
   */
  onChange?: (newValue: number) => void;
}

export default function NumberField({ value, onChange }: NumberFieldProps) {
  const [state, setState] = useState(value);

  function handleClick(actionType: 'subtract' | 'add') {
    if (actionType === 'subtract' && state === 0) return;

    const newValue = actionType === 'add' ? state + 1 : state - 1;

    setState(newValue);
    
    if (onChange) onChange(newValue);
  }

  return (
    <StyledNumberField>
      <button onClick={() => handleClick('subtract')}>-</button>
      <div>
        {state}
      </div>
      <button onClick={() => handleClick('add')}>+</button>
    </StyledNumberField>
  );
}