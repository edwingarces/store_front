import React, { useState } from 'react';
import Input from './Input';
import axios from 'axios';

const initialState = {
  name: '',
  address: '',
};

const StoreForm = ({ onSuccess }) => {
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
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        'http://localhost:3001/api/stores/create',
        inputs,
      );
      if (data.status === 200) {
        setSuccess(true);
        onSuccess();
      } else {
        setError(true);
      }
    } catch (e) {
      console.log(e);
      setError(true);
    }
    
  };

  const {name, address} = inputs

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          id="name"
          label="¿Cuál es el nombre de la tienda?"
          type="text"
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
        <button type="submit">Enviar</button>
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
