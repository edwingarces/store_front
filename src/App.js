import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './containers/Home';
import AddProducts from './containers/AddProduct';
import './App.css';


const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />  
      </Route>
      <Route exact path="/product">
        <AddProducts />
      </Route>
    </Switch>
  </Router>
);

export default App;
