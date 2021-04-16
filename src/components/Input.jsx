import React from 'react';

const Input = ({id, value, type, placeholder, handleChange}) => {
  return (
    <input
      id={id}
      type={type ? type : 'text'}
      value={value}
      placeholder={placeholder ? placeholder : 'Introduce la información'}
      onChange={handleChange}
    />
  );
};

export default Input;
