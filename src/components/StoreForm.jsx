import React, { useState, useEffect } from 'react';
import Input from './Input';
import axios from 'axios';

const initialState = {
  name: '',
  address: '',
  date: '',
};

const StoreForm = ({ onSuccess, editing, initialValues }) => {
  const [inputs, setInputs] = useState(initialState);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(false);
  const handleChange = ({ target }) => {
    const { id, value } = target;
    setInputs({
      ...inputs,
      [id]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!editing) {
      addNewStore();
    } else {
      updateStore();
    }
  };

  const addNewStore = async () => {
    try {
      const { data } = await axios.post(
        'http://localhost:3001/api/stores/create',
        inputs,
      );
      if (data.status === 200) {
        setSuccess(true);
        onSuccess();
        setInputs({
          ...inputs,
          name: '',
          address: '',
        });
      } else {
        setError(true);
      }
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  const updateStore = async () => {
    try {
      const { data } = await axios.put(
        'http://localhost:3001/api/stores/update',
        {
          storeId: initialValues.store_id,
          name: inputs.name,
          address: inputs.address,
        },
      );
      if (data.status === 200) {
        setSuccess(true);
        onSuccess();
        setInputs({
          ...inputs,
          name: '',
          address: '',
        });
      } else {
        setError(true);
      }
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
  }, [success]);

  useEffect(() => {
    if (editing) {
      setInputs({
        ...inputs,
       name: initialValues.name,
       address: initialValues.address, 
      });
    }
  }, [editing]);

  const {name, address, date} = inputs

  return (
    <>
      <h2>{editing ?
        `Actualizar la tienda con id: ${initialValues.store_id}`
        :
        'Agregar una nueva tienda'
      }</h2>
      <form onSubmit={handleSubmit}>
        <Input
          id="name"
          label="¿Cuál es el nombre de la tienda?"
          type="text"
          defaultValue={name}
          value={name}
          placeholder="Nombre"
          onChange={handleChange}
        />
        <br />
        <Input
          id="address"
          label="¿Cuál es la dirección?"
          type="text"
          value={address}
          placeholder="Dirección"
          onChange={handleChange}
        />
        <br />
        <Input
          id="date"
          label="¿Cuál es la fecha?"
          type="date"
          value={date}
          placeholder="Dirección"
          onChange={handleChange}
        />
        <br />
        <button type="submit">{editing ? 'Actualizar' : 'Enviar'}</button>
      </form>
      {error ? 
        <h1 style={{ color: 'red' }}>Ocurrió un error</h1>
        :
        null
      }
      {success ?
        <h1 style={{ color: 'green' }}>Se guardó la tienda</h1>
        :
        null
      }
    </>
  )
}

export default StoreForm
