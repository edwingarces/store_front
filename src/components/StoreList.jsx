import React from 'react';

const StoreList = ({ stores }) => {
  return (
    <>
      <table style={{ width: '100%' }}>
      <tr>
        <th>Id</th>
        <th>Nombre</th>
        <th>Dirección</th>
      </tr>
      {stores.map(({ store_id, name, address }) =>
        <tr>
          <td>{store_id}</td>
          <td>{name}</td>
          <td>{address}</td>
        </tr>
      )}
      </table>
    </>
  )
};

export default StoreList;
