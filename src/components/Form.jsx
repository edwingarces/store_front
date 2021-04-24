import React, { useEffect, useState } from 'react';
import Select from './Select';
import Input from './Input';
import Button from './Button';
import axios from 'axios';

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
  const [stores, setStores] = useState(null);
  const [departments, setDepartments] = useState(null);
  const [error, setError] = useState(false);
  const [selects, setSelects] = useState([]);

  const handleInputChange = ({ target }) => {
    const { id, value } = target;
    console.log(id, value);
    setValues({
      ...values,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    values.storeId = 1;
    console.log(values);
    try {
      const { data } = await axios.post('api/products/create', values);
      if (data.status !== 200) {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  };

  const getInfo = async () => {
    try {
      const storesResponse = await axios.get('api/stores');
      const storesInfo = setStoresInfo(storesResponse.data.stores);
      setStores(storesInfo);
      const departmentsResponse = await axios.get('api/departments');
      const departmentsInfo = setDepartmentsInfo(departmentsResponse.data.departments);
      setDepartments(departmentsInfo);
      setSelects([
        {
          id: 'storeId',
          label: 'Selecciona una tienda',
          options: storesInfo,
          handler: handleInputChange,
        }, // Aquí termina el primer select
        {
          id: 'departmentId',
          label: 'Selecciona un departamento',
          options: departmentsInfo,
          handler: handleInputChange,
        },
      ]);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const setStoresInfo = (stores) => {
    const storesInfo = [];
    stores.forEach((store) => {
      storesInfo.push({
        value: store.store_id,
        label: store.name,
      });
    });
    return storesInfo;
  }

  const setDepartmentsInfo = (departments) => {
    const departmentsInfo = [];
    departments.forEach((department) => {
      departmentsInfo.push({
        value: department.department_id,
        label: department.name,
      });
    });
    return departmentsInfo;
  }

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

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      <form>
        {selects &&
          selects.map(({id, label, options, handler}) => (
            <Select
              id={id}
              label={label}
              options={options}
              handleChange={handler}
              key={id}
            />
          ))}
        {inputs.map(({id, value, type, handler, label}) =>(
          <Input
            id={id}
            value={value}
            type={type}
            handleChange={handler}
            label={label}
            key={id}
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
