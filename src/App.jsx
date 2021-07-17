import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import User from './containers/User';
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
      <Route exact path='/user/:firstName'>
        <User />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

// Actividad
// Crear una nueva ruta con su respectivo enlace hacia una nueva pantalla con título pasado por url

export default App;
