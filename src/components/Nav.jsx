import React from 'react';
import ListElement from './ListElement';

const Nav = ({ pages }) => {
  return (
    <nav>
      <ul>
        {pages.map(({route, label}, index) => 
          <ListElement key={`listElement-${index}`} route={route} label={label} />
        )}
      </ul>
    </nav>
  )
};

export default Nav;
