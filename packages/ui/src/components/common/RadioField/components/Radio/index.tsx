import { MouseEvent, ChangeEvent } from 'react';
import styled from 'styled-components';
import { useRadioContext } from '../../RadioContext';

export const StyledRadio = styled.div<{ isChecked: boolean; }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding-left: 16px;

  border: 1px solid ${({ theme, isChecked }) => isChecked ? theme.colors.primary.main : theme.colors.gray.main};
  border-radius: 8px;
  height: 56px;

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary.main};
  }

  label {
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: -0.25px;

    cursor: pointer;
  }

  input {
    width: 16px;
    visibility: hidden;
  }

  .input-icon {
    height: 20px;
    width: 20px;
    border: 1px solid ${({ theme }) => theme.colors.gray.main};
    border-radius: 50%;

    padding: 4px;
  }

  .input-icon__inner {
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.colors.primary.main};
    border-radius: 50%;
  }
`;

interface RadioProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'value'> {
  children: React.ReactNode;
  value: string | number;
}

export function Radio({ children, value, ...rest }: RadioProps) {
  const [activeValue, onChange] = useRadioContext();
  const isChecked = (activeValue === value);
  
  function handleSelect(event: MouseEvent | ChangeEvent) {
    event.stopPropagation();

    onChange(value);
  }

  return (
    <StyledRadio isChecked={isChecked} onClick={handleSelect}>
      <div className="input-icon">
        {isChecked && <div className="input-icon__inner" />}
      </div>
      <input
        type="radio"
        value={value}
        {...rest}
      />
      <label>{children}</label>
    </StyledRadio>
  );
}