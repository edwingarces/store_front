import React from 'react';

const ListElement = ({ route, label }) => (
  <li><a href={route}>{label}</a></li>
);

export default ListElement;
