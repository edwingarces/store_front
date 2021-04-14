import React, { useState } from 'react';

const Form = () => {
  const vals = {
    name: '',
    department: 0,
    description: '',
  };
  const [values, setValues] = useState(vals);
  const handleInputChange = ({ target }) => {
    const { id, value } = target;
    setValues({
      ...values,
      [id]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(values);
  };

  return (
    <>
      <form>
        <input id="name" type="text" value={values.name} placeholder="Nombre" onChange={handleInputChange} />
        <input id="department" type="number" value={values.department} placeholder="Departamento" onChange={handleInputChange} />
        <input id="description" type="text" value={values.description} placeholder="Descripción" onChange={handleInputChange} />
        <button onClick={handleSubmit}>Guardar</button>
      </form>
    </>
  );
};

export default Form;
