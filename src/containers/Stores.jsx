import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StoreForm from '../components/StoreForm';
import StoreList from '../components/StoreList';

const Stores = () => {
  const [stores, setStores] = useState([]);
  const [error, setError] = useState(false);

  // Llamada asincrona a la API
  const getStores = async () => {
    // Try and catch para asegurarnos de que la llamada se ejecute correctamente
    try {
      // Llamada a la API con Axios
      const { data } = await axios.get('http://localhost:3001/api/stores')
      // Verificamos que el estatus sea 200
      if (data.status === 200) {
        setStores(data.stores);
      } else {
        // En caso de que no sea 200 creamos el error
        setError(true);
      }
    } catch (err) {
      // En caso de la llamada no se ejecute correctamente creamos el error
      console.log(err);
      setError(true);
    }
  };

  const onSuccess = () => {
    getStores();
  }

  useEffect(() => {
    getStores();
  }, []);

  return (
    <>
     <h1>Tiendas</h1>
     <StoreForm onSuccess={onSuccess} />
     {stores.length > 0 ?
      <StoreList stores={stores} />
      :
      null
     }
     {error ?
      <h2 style={{ color: 'red' }}>Ocurrió un error</h2>
      :
      null
     }
    </>
  )
};

export default Stores;
