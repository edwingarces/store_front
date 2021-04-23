import React, { useEffect } from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import image from '../assets/images/laptop-336378_640.jpg';
import axios from 'axios';

const Product = () => {
  useEffect(async () => {
    const productResponse = await axios.get('api/products/get/14');
    console.log(productResponse);
  }, []);
  return (
    <div className="card" style={{width: '18rem'}}>
      <img src={image} className="card-img-top" alt="Imagen del producto" />
      <div className="card-body">
        <h5 className="card-title">Nombre del producto</h5>
        <p className="card-text">Descripción</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Marca</li>
        <li className="list-group-item">Tienda</li>
        <li className="list-group-item">Departamento</li>
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
  );
};

export default Product;
