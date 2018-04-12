import React from 'react';
import { TextField } from 'react-md';

const InputField = props => (
  <TextField
    hintText={props.label}
    floatingLabelText={props.label}
    errorText={props.touched && props.error}
    {...props}
  />
);

export default InputField;
