import React from 'react';

const Select = ({id, label, options, handleChange}) => (
  <select
    id={id}
    className="form-select"
    aria-label="Default select example"
    handleChange={handleChange}
  >
    <option selected disabled>{label}</option>
    {options.map(({value, label}) => (
      <option value={value}>{label}</option>
    ))}
  </select>
);

export default Select;
