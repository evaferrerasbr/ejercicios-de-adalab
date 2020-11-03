import React from 'react';
import Mediacard from './Mediacard';

class Medialist extends React.Component {
  render() {
    return (
      <ul className="App-list">
        <li>
          <Mediacard
            name="Álex Guerrero"
            date="Lunes 26 de junio de 2017"
            likes="37"
          />
        </li>
        <li>
          <Mediacard
            name="Eva Ferreras"
            date="Martes 12 de agosto de 2017"
            likes="26"
          />
        </li>
        <li>
          <Mediacard
            name="Mabel Pines"
            date="Domingo 1 de junio de 2017"
            likes="45"
          />
        </li>
      </ul>
    );
  }
}

export default Medialist;
