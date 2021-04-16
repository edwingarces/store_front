import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => (
  <>
    <Header title="Home" />
    <h3>Bienvenido</h3>
    <Link to="/product">Añadir un producto</Link>
  </>
);

export default Home;
