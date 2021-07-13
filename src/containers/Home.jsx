import React from 'react';
import Nav from '../components/Nav';
import Form from '../components/Form';

const pages = [
  {
    route: '/home',
    label: 'Inicio',
  },
  {
    route: '/about',
    label: 'Acerca de',
  },
  {
    route: '/contact',
    label: 'Contacto',
  },
];

const Home = () => (
  <>
    <Nav pages={pages} />
    <Form />
  </>
);

export default Home;
