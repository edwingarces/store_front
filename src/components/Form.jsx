import React, { useState } from 'react';

const initialState = {
  name: '',
  lastName: '',
  age: '',
};

// const numeros = {uno: 1, dos: 2, tres: 3};

// const agregarNumero = (nuevoNumero) => {
//   return {
//     ...numeros,
//     ['uno']: nuevoNumero,
//   };
// }

// const algo = agregarNumero(4);

// console.log(algo);

const Form = () => {
  const [inputValues, setInputValues] = useState(initialState);
  const { name, lastName, age } = inputValues;
  const handleChange = ({ target }) => {
    const { id, value } = target;
    console.log(`id: ${id}, value: ${value}`);
    setInputValues({
      ...inputValues,
      [id]: value,
    });
  };

  return (
    <form>
      <input
        id="name"
        type="text"
        value={name}
        placeholder="Nombre"
        onChange={handleChange}
      />
      <input
        id="lastName"
        type="text"
        value={lastName}
        placeholder="Apellido"
        onChange={handleChange}
      />
      <input
        id="age"
        type="number"
        value={age}
        placeholder="Edad"
        onChange={handleChange}
      />
      <br />
      <button type="button">Enviar</button>
    </form>
  );
};

// Actividad:
// Hacer un componente Input
// <Input id="" type="" plaveholder="" value="" onChange="" />
// Hacer un componente Button
// <Button color="" type="button" onClick="">Texto</Button> 

export default Form;
