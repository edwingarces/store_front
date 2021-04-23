import React, { useState } from 'react';
import Select from './Select';
import Input from './Input';
import Button from './Button';

const Form = () => {
  const vals = {
    name: '',
    brand: '',
    description: '',
    stock: '',
    storeId: '',
    departmentId: '',
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
  const selects = [
    {
      id: 'storeId',
      label: 'Selecciona una tienda',
      options: [
        {
          value: 1,
          label: 'La tienda principal',
        },
        {
          value: 2,
          label: 'La tienda de jorge',
        },
      ],
      handler: handleInputChange,
    }, // Aquí termina el primer select
    {
      id: 'departmentId',
      label: 'Selecciona un departamento',
      options: [
        {
          value: 1,
          label: 'Baterías y Percusión',
        },
        {
          value: 2,
          label: 'Guitarras',
        },
      ],
      handler: handleInputChange,
    },
  ];
  const inputs = [
    {
      id: 'name',
      type: 'text',
      value: values.name,
      handler: handleInputChange,
      label: 'Nombre',
    },
    {
      id: 'brand',
      type: 'text',
      value: values.brand,
      handler: handleInputChange,
      label: 'Marca',
    },
    {
      id: 'description',
      type: 'text',
      value: values.description,
      handler: handleInputChange,
      label: 'Descripción',
    },
    {
      id: 'stock',
      type: 'number',
      value: values.stock,
      handler: handleInputChange,
      label: 'Stock',
    },
  ];
  return (
    <>
      <form>
        {selects.map(({id, label, options, handler}) => (
          <Select
            id={id}
            label={label}
            options={options}
            handleChange={handler}
          />
        ))}
        {inputs.map(({id, value, type, handler, label}) =>(
          <Input
            id={id}
            value={value}
            type={type}
            handleChange={handler}
            label={label}
          />
        ))}
        <Button type="submit" color="success" action={handleSubmit}>Guardar</Button>
        {error &&
          <span style={{color: 'red'}}>Hay un error</span>
        }
      </form>
    </>
  );
};

export default Form;
