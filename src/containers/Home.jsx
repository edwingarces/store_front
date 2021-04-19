import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';

const Home = () => (
  <>
    <Header title="Home" />
    <h3>Bienvenido</h3>
    <Button type="link">
      <Link to="/product">Añadir un producto</Link>
    </Button>
  </>
);

export default Home;
