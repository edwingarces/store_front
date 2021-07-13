import React from 'react';

const Button = ({type, action, children, color}) => (
  <>
    {type === 'link' ?
      <button type="button" className="btn btn-link" >
        {children}
      </button>
      :
      <button type="button" className={`btn btn-${color}`} onClick={action}>
        {children}
      </button>
    }
  </>
);

export default Button;
