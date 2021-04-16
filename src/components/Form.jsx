import React, { useState } from 'react';
import Input from './Input';

const Form = () => {
  const vals = {
    name: '',
    department: '',
    description: '',
  };
  const [values, setValues] = useState(vals);
  const [error, setError] = useState(false);
  const handleInputChange = ({ target }) => {
    const { id, value } = target;
    setValues({
      ...values,
      [id]: value,
    });
    setError(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(values);
  };

  return (
    <>
      <form>
        <Input
          id="name"
          value={values.name}
          handleChange={handleInputChange}
        />
        <Input
          id="department"
          type="number"
          value={values.department}
          handleChange={handleInputChange}
        />
        <Input
          id="description"
          value={values.description}
          handleChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Guardar</button>
        {error &&
          <span style={{color: 'red'}}>Hay un error</span>
        }
      </form>
    </>
  );
};

export default Form;
