import React from 'react';

const StoreList = ({ stores, onEdit, onDelete }) => {
  return (
    <>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Dirección</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {stores.map(({ store_id, name, address }) =>
            <tr key={store_id}>
              <td>{store_id}</td>
              <td>{name}</td>
              <td>{address}</td>
              <td>
                <button
                  type="button"
                  onClick={() => onEdit({ store_id, name, address })}
                >
                  Editar
                </button>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => onDelete(store_id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
};

export default StoreList;
