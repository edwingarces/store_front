import React from 'react';

const Button = ({type, action, children}) => (
  <>
    {type === 'link' ?
      <button type="button">
        {children}
      </button>
      :
      <button type="button" onClick={action}>
        {children}
      </button>
    }
  </>
);

export default Button;
