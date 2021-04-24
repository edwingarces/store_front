import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import image from '../assets/images/laptop-336378_640.jpg';
import axios from 'axios';

const Product = () => {

  const [product, setProduct] = useState(null);
  const [stores, setStores] = useState(null);
  const [departments, setDepartments] = useState(null);
  const [error, setError] = useState(false);

  const getInfo = async () => {
    try {
      const storesResponse = await axios.get('api/stores');
      setStores(storesResponse.data.stores);
      const departmentsResponse = await axios.get('api/departments');
      setDepartments(departmentsResponse.data.departments);
      const { data } = await axios.get('api/products/get/14');
      setProduct(data.product);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const getStoreInfo = (id) => {
    stores.forEach((store) => {
      if (store.store_id === id) {
        console.log(store.store_id);
        return store.store_id;
      }
    });
  }

  useEffect(() => {
    getInfo();
  }, []);
  return (
    <>
      {!product ? 
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        :
        <div className="card" style={{width: '18rem'}}>
          <img src={image} className="card-img-top" alt="Imagen del producto" />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{product.brand}</li>
            <li className="list-group-item">{stores ? getStoreInfo(product.store_id) : product.store_id}</li>
            <li className="list-group-item">{product.department_id}</li>
          </ul>
          <div className="card-body">
            <Button type="button">
              <Link to="/" >Editar</Link>
            </Button>
            <Button type="button">
              <Link to="/" >Eliminar</Link>
            </Button>
          </div>
        </div>
      }
      {error &&
        <div className="alert alert-danger" role="alert">
          Ocurrió un problema al cargar el producto
        </div>
      }
    </>
  );
};

export default Product;
