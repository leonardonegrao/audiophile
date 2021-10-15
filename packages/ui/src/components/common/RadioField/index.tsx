import { useState } from 'react';
import styled, { css } from 'styled-components';

import Text from '../Text';

const StyledRadioField = styled.fieldset`
  display: flex;

  border: none;
  padding: 0px;

  label + label {
    margin-left: 20px;
  }
`;

interface StyledRadioProps {
  isSelected: boolean;
  isDisabled?: boolean;
}

const StyledRadioDefaultStyles = css`
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary.main};
  }
`;

const StyledRadioSelectedStyles = css`
  border: 1px solid ${({ theme }) => theme.colors.primary.main};
  
  .check-circle {
    .inner-circle {
      background: ${({ theme }) => theme.colors.primary.main};
      width: 10px;
      height: 10px;

      border-radius: 50%;
    }
  }
`;

const StyledRadioDisabledStyles = css`
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
`;

const StyledRadio = styled.label<StyledRadioProps>`
  display: flex;
  align-items: center;

  padding-left: 16px;

  border: 1px solid ${({ theme }) => theme.colors.gray.main};
  border-radius: 8px;
  width: 309px;
  height: 56px;

  transition: all 0.3s ease-in-out;

  .check-circle {
    border-radius: 50%;

    height: 20px;
    width: 20px;
    border: 1px solid ${({ theme }) => theme.colors.gray.main};

    padding: 4px;
  }

  input {
    width: 0px;
  }

  ${({ isDisabled }) => isDisabled ? StyledRadioDisabledStyles : StyledRadioDefaultStyles}
  ${({ isSelected }) => isSelected && StyledRadioSelectedStyles}
`;

export interface Option {
  id: string | number;
  label: string;
  value: string | number;
}

interface RadioFieldProps extends Omit<React.ComponentPropsWithoutRef<'fieldset'>, 'onChange'> {
  /**
   * Name of the field. Must be unique in a page with multiple RadioFields.
   */
  name: string;
  /**
   * List of options. Each option must have an id, label and value. The id must be unique.
   */
  options: Option[];
  /**
   * Callback function that is called when the user selects an option.
   */
  onChange: (value: string | number) => void;
  /**
   * The default value. If not provided, the RadioField can't be controlled, as it uses the
   * current value to verify if the option is selected.
   */
  value?: string | number;
  isOptionDisabled?: (option: Option) => boolean;
}

export default function RadioField({
  name,
  options,
  onChange,
  value,
  isOptionDisabled,
  ...rest
}: RadioFieldProps) {
  const selected = (optionValue: string | number) => optionValue === value;
  const disabled = (option: Option) => isOptionDisabled && isOptionDisabled(option); 

  return (
    <StyledRadioField {...rest}>
      {options.map((option) => {
        const isSelected = selected(option.value);
        const isDisabled = disabled(option);

        return (
          <StyledRadio
            key={option.id}
            isSelected={isSelected}
            isDisabled={isDisabled}
            onClick={(event) => {
              event.preventDefault();
              if (isDisabled) return;

              onChange(option.value);
            }}
          >
            <div className="check-circle">
              <div className="inner-circle" />
            </div>

            <input
              name={name}
              type="radio"
              checked={isSelected}
              readOnly
            />

            <Text
              fontSize={14}
              fontWeight="bold"
              letterSpacing={-0.25}
            >
              {option.label}
            </Text>
          </StyledRadio>
        );
      })}
    </StyledRadioField>
  );
}