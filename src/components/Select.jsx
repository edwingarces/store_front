import React from 'react';

const Select = ({id, label, options, handleChange}) => (
  <select
    id={id}
    className="form-select"
    aria-label="Default select example"
    onChange={handleChange}
  >
    <option defaultValue="" selected disabled>{label}</option>
    {options.map(({value, label}) => (
      <option defaultValue="" value={value}>{label}</option>
    ))}
  </select>
);

export default Select;
