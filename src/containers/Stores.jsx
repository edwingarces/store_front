import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StoreForm from '../components/StoreForm';
import StoreList from '../components/StoreList';

const Stores = () => {
  const [stores, setStores] = useState([]);
  const [error, setError] = useState(false);
  const [editing, setEditing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [storeId, setStoreId] = useState(null);
  const [initialValues, setInitialValues] = useState({store_id: '', name: '', address: ''});

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
    setEditing(false);
    getStores();
  };

  const handleEdit = ({store_id, name, address}) => {
    setInitialValues({store_id, name, address});
    setEditing(true);
  };

  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3001/api/stores/delete/${storeId}`,
      );
      if (data.status === 200) {
        setSuccess(true);
        setConfirm(false);
        onSuccess();
      } else {
        setError(true);
      }
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  const handleConfirm = (storeId) => {
    setStoreId(storeId);
    setConfirm(true);
  }

  useEffect(() => {
    getStores();
  }, []);

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
  }, [success]);

  return (
    <>
     <h1>Tiendas</h1>
     <StoreForm
      initialValues={initialValues}
      editing={editing}
      onSuccess={onSuccess}
    />
     {stores.length > 0 ?
      <StoreList
        stores={stores}
        onEdit={handleEdit}
        onDelete={handleConfirm}
      />
      :
      null
     }
     {error ?
      <h2 style={{ color: 'red' }}>Ocurrió un error</h2>
      :
      null
     }
     {success ?
        <h1 style={{ color: 'green' }}>Se eliminó la tienda</h1>
        :
        null
      }
      {confirm ?
        <>
          <h3 style={{ color: 'red' }}>¿Estás seguro que deseas eliminar la tienda?</h3>
          <button style={{ color: 'red' }} type="button" onClick={handleDelete}>
            Eliminar
          </button>
          <button style={{ color: 'gray' }} type="button" onClick={() => setConfirm(false)}>
            Cancelar
          </button>
        </>
        :
        null
      }
    </>
  )
};

export default Stores;
