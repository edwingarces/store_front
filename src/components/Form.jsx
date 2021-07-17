import React, { useState, useEffect } from 'react';
import Input from './Input';
import { useParams } from 'react-router';

const initialState = {
  name: '',
  lastName: '',
  age: '',
};

const Form = () => {
  const [inputValues, setInputValues] = useState(initialState);
  const [isValid, setIsValid] = useState(true);
  const [intent, setIntent] = useState('');
  const { firstName } = useParams();
  const { name, lastName, age } = inputValues;
  const handleChange = ({ target }) => {
    const { id, value } = target;
    console.log(`id: ${id}, value: ${value}`);
    setInputValues({
      ...inputValues,
      [id]: value,
    });
  };

  const handleSubmit = () => {
    const nameIsJorge = inputValues.name === 'Jorge';
    if (!nameIsJorge) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  useEffect(() => {
    if (!isValid) {
      setIntent('warning');
    }
  }, [isValid]);

  useEffect(() => {
    console.log(firstName)
    if (firstName) {
      setInputValues({
        ...inputValues,
        name: firstName,
      })
    }
  }, []);

  return (
    <form>
      <Input
        id="name"
        label="¿Cuál es tu nombre?"
        intent={intent}
        type="text"
        value={name}
        placeholder="Nombre"
        onChange={handleChange}
      />
      <br />
      <Input
        id="lastName"
        label="¿Cuál es tu apellido?"
        intent={intent}
        type="text"
        value={lastName}
        placeholder="Apellido"
        onChange={handleChange}
      />
      <br />
      <Input
        id="age"
        label="¿Cuál es tu edad?"
        intent={intent}
        type="number"
        value={age}
        placeholder="Edad"
        onChange={handleChange}
      />
      <br />
      <button
        type="button"
        onClick={handleSubmit}
      >
        Enviar
      </button>
    </form>
  );
};

export default Form;
