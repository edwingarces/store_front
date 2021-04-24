import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './containers/Home';
import Product from './containers/Product';
import AddProducts from './containers/AddProduct';
import './App.css';

const routes = [
  {
    link: '/add-product',
    label: 'Añadir un producto',
  },
  {
    link: '/product',
    label: 'Ver producto',
  },
];

// Añadir un contenedor para agregar una tienda
// Crear un nuevo formulario para esa tienda
// Crear un componente de alerta para comunicar errores
// Crear un componente de alerta para confirmar success
// Añadir una nueva ruta
// Añadir un nuevo botón en el menú

const App = () => (
  <Router>
    <div className="container-fluid">
      <Nav home="/" routes={routes} />
      <div className="row justify-content-md-center">
        <div className="col-md-12">
          <Switch>
            <Route exact path="/">
              <Home />  
            </Route>
            <Route exact path="/product">
              <Product />
            </Route>
            <Route exact path="/add-product">
              <AddProducts />
            </Route>
            <Route>
              <h1>No se encontró la página</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  </Router>
);

export default App;
