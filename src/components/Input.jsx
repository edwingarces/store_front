import React from 'react';
import Label from './Label';

const Input = ({
  id,
  label,
  intent,
  type,
  placeholder,
  value,
  onChange,
  disabled,
}) => (
  <>
    <Label
      htmlFor={id}
      intent={intent}
    >
      {label}
    </Label>
    <br />
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      vlaue={value}
      onChange={onChange}
      disabled={disabled}
    />
  </>
)

export default Input
