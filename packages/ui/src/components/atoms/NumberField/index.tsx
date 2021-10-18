import React from 'react';
import styled from 'styled-components';
import Text from '../Text';

const StyledNumberField = styled.div`
  display: flex;
  
  height: 100%;
  max-height: 48px;
  
  width: 100%;
  max-width: 120px;
  
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
  return (
    <StyledNumberField>
      <button onClick={() => onChange && onChange(value - 1)}>
        <Text fontSize={13} fontWeight={700}>
          -
        </Text>
      </button>
      <div>
        {value}
      </div>
      <button onClick={() => onChange && onChange(value + 1)}>
        <Text fontSize={13} fontWeight={700}>
          +
        </Text>
      </button>
    </StyledNumberField>
  );
}