import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/relax">Relax</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
