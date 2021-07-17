import React from 'react';

const Label = ({ children, htmlFor, intent }) => (
  <label
    className={intent || ''}
    htmlFor={htmlFor}
  >
    {children}
  </label>
);

export default Label;
