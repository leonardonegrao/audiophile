import React from 'react';
import styled from 'styled-components';

export interface TextFieldProps extends React.ComponentPropsWithoutRef<'input'> {
  /**
   * Handles how the width should be defined. `fixed` sets it to 309px, `grow` sets it to 100% (parent defines width).
   */
  widthBehavior?: 'fixed' | 'grow';
  /**
   * Label of the TextField, stays above the input. Optional, if no value is passed, label won't be rendered.
   */
  label?: string;
  /**
   * Checks if the field is invalid.
   */
  isInvalid?: boolean;
  /**
   * Message displayed if field `isInvalid`.
   */
  invalidMessage?: string;
  /**
   * The name of the field. Is used for validation in a form, and accessibility.
   */
  fieldName: string;
  /**
   * Hint about the reason of a field being disabled, shows up on hover.
   */
  disabledMessage?: string;
}

const StyledTextField = styled.div<Pick<TextFieldProps, 'widthBehavior' | 'isInvalid'>>`
  display: flex;
  flex-direction: column;

  max-width: ${({ widthBehavior }) => widthBehavior === 'fixed' ? '309px' : '100%'};

  .label-error-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 9px;

    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.21px;
    color: ${({ theme, isInvalid }) => isInvalid ? theme.colors.error.main : theme.colors.black.main};

    label {
      font-weight: 700;
    }
  }

  input {
    border: solid ${
  ({ theme, isInvalid }) => isInvalid ? `2px ${theme.colors.error.main}` : `1px ${theme.colors.gray.main}`
};
    border-radius: 8px;
    height: 56px;

    padding-left: 24px;
    padding-right: 24px;

    font-size: 14px;
    line-height: 19px;
    letter-spacing: -0.25px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black.main};

    &::placeholder {
      font-size: 14px;
      line-height: 19px;
      letter-spacing: -0.25px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.black.main};
      opacity: 0.4;
    }

    &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.primary.main};
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export default function TextField({
  label,
  widthBehavior = 'fixed',
  isInvalid = false,
  invalidMessage = '',
  disabled = false,
  disabledMessage = '',
  fieldName,
  ...rest
}: TextFieldProps) {
  const [title, setTitle] = React.useState<string>('');

  React.useEffect(() => {
    if (isInvalid) {
      setTitle(invalidMessage);
    } else if (disabled) {
      setTitle(disabledMessage);
    } else {
      setTitle('');
    }

    return () => {
      setTitle('');
    };
  }, [isInvalid, invalidMessage, disabled, disabledMessage]);

  return (
    <StyledTextField widthBehavior={widthBehavior} isInvalid={isInvalid} >
      {(label || isInvalid) && (
        <div className="label-error-wrapper">
          {label && <label htmlFor={fieldName}>{label}</label>}
          {isInvalid && <span>{invalidMessage}</span>}
        </div>
      )}
      <input
        id={fieldName}
        name={fieldName}
        title={title}
        disabled={disabled}
        {...rest}
      />
    </StyledTextField>
  );
}