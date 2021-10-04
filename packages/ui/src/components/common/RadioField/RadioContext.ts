import React from 'react';

type Value = string | number | undefined;
type RadioDispatch = (newValue: string | number) => void;

interface IRadioContext {
  value?: Value;
  onChange: RadioDispatch;
}

const onChangeDefault = (newValue: Value) => {
  throw new Error(
    'Radio onChange() was called, but not defined. Check if the <Radio /> is encapsulated by a <RadioGroup />'
  );
};

export const RadioContext = React.createContext<IRadioContext>({ onChange: onChangeDefault });

export function useRadioContext(): [Value, RadioDispatch] {
  const context = React.useContext(RadioContext);

  if (!context) {
    throw new Error('useRadioContext must be used inside of a Provider');
  }

  const { value, onChange } = context;

  return [value, onChange];
}