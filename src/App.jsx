import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import User from './containers/User';
import Stores from './containers/Stores';
import NotFound from './containers/NotFound';
import Nav from './components/Nav';
import './App.css';

const pages = [
  {
    route: '/',
    label: 'Inicio',
  },
  {
    route: '/user',
    label: 'Usuario',
  },
  {
    route: '/stores',
    label: 'Tiendas',
  },
  {
    route: '/contact',
    label: 'Contacto',
  },
];

const App = () => (
  <Router>
    <Nav pages={pages} />
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/user'>
        <User />
      </Route>
      <Route exact path='/stores'>
        <Stores />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

// Crear flujo con departamentos
// Crear Nuevo contenedor
// Crear componente para listar los departamentos
// Crear componente de formulario para guardar un nuevo departamento

export default App;
