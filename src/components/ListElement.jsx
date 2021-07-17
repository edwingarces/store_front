import React from 'react';
import { Link } from 'react-router-dom';

const ListElement = ({ route, label }) => (
  <li><Link to={route}>{label}</Link></li>
);

export default ListElement;
