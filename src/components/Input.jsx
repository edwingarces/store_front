import React from 'react';

const Input = ({id, value, type, placeholder, handleChange, label}) => {
  return (
    <>
      <label htmlFor={id} className="form-label">{label}</label>
      <input
        id={id}
        className="form-control"
        type={type}
        value={value}
        placeholder={placeholder ? placeholder : 'Introduce la información'}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
