import React from 'react';
import Mediacard from './Mediacard';
import logo from '../images/mabelpines.jpg';

const people = [
  {
    name: 'Álex Guerrero',
    date: 'Lunes 26 de junio de 2017',
    likes: 37,
    image: '',
    description:
      'Lorem fistrum no te digo trigo por no llamarte Rodrigor a gramenawer ese que llega de la pradera. De la pradera a wan a gramenawer diodeno ese que llega. Ese hombree fistro al ataquerl pupita jarl al ataquerl. Pecador a gramenawer torpedo tiene musho peligro apetecan ese hombree va usté muy cargadoo. No puedor sexuarl mamaar me cago en tus muelas a peich la caidita. Te voy a borrar el cerito pupita mamaar va usté muy cargadoo papaar papaar.',
  },
  {
    name: 'Eva Ferreras',
    date: 'Martes 12 de agosto de 2017',
    likes: 26,
    image: '',
    description:
      'Lorem fistrum no te digo trigo por no llamarte Rodrigor a gramenawer ese que llega de la pradera. De la pradera a wan a gramenawer diodeno ese que llega. Ese hombree fistro al ataquerl pupita jarl al ataquerl. Pecador a gramenawer torpedo tiene musho peligro apetecan ese hombree va usté muy cargadoo. No puedor sexuarl mamaar me cago en tus muelas a peich la caidita. Te voy a borrar el cerito pupita mamaar va usté muy cargadoo papaar papaar.',
  },
  {
    name: 'Mabel Pines',
    date: 'Domingo 1 de junio de 2017',
    likes: 45,
    image: '',
    description:
      'Lorem fistrum no te digo trigo por no llamarte Rodrigor a gramenawer ese que llega de la pradera. De la pradera a wan a gramenawer diodeno ese que llega. Ese hombree fistro al ataquerl pupita jarl al ataquerl. Pecador a gramenawer torpedo tiene musho peligro apetecan ese hombree va usté muy cargadoo. No puedor sexuarl mamaar me cago en tus muelas a peich la caidita. Te voy a borrar el cerito pupita mamaar va usté muy cargadoo papaar papaar.',
  },
];

const peopleItems = people.map((people) => {
  return (
    <li>
      <Mediacard
        image={logo}
        name={people.name}
        date={people.date}
        likes={people.likes}
        description={people.description}
      />
    </li>
  );
});

class Medialist extends React.Component {
  render() {
    return <ul className="App-list">{peopleItems}</ul>;
  }
}

export default Medialist;
