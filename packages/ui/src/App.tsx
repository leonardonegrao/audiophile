import React from 'react';
import { RadioFieldGroup, RadioField } from './components/common/RadioField';

function App() {
  const [value, setValue] = React.useState('');

  return (
    <div className="App">
      <RadioFieldGroup
        fieldName="gender"
        onChange={(event) => console.log(event)}
      >
        <RadioField value="M">Male</RadioField>
        <RadioField value="F">Female</RadioField>
        <RadioField value="NB">Non-binary</RadioField>
      </RadioFieldGroup>
    </div>
  );
}

export default App;
