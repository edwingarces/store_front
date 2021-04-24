import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ home, routes }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link to={home} className="navbar-brand">Inicio</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto ml-5 mb-2 mb-lg-0">
          {routes.map(({link, label}) => (
            <li className="nav-item" key={label}>
              <Link to={link} className="nav-link active">{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
