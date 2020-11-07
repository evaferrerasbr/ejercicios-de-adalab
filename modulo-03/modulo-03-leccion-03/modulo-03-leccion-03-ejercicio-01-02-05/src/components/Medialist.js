import React from 'react';
import Mediacard from './Mediacard';
import LogoAlex from '../images/alexguerrero.jpg';
import LogoEva from '../images/evaferreras.jpg';
import LogoMabel from '../images/mabelpines.jpg';

const people = [
  {
    name: 'Álex Guerrero',
    date: 'Lunes 26 de junio de 2017',
    likes: 0,
    image: LogoAlex,
    description:
      'Lorem fistrum no te digo trigo por no llamarte Rodrigor a gramenawer ese que llega de la pradera. De la pradera a wan a gramenawer diodeno ese que llega. Ese hombree fistro al ataquerl pupita jarl al ataquerl. Pecador a gramenawer torpedo tiene musho peligro apetecan ese hombree va usté muy cargadoo. No puedor sexuarl mamaar me cago en tus muelas a peich la caidita. Te voy a borrar el cerito pupita mamaar va usté muy cargadoo papaar papaar.',
    heart: true,
  },
  {
    name: 'Eva Ferreras',
    date: 'Martes 12 de agosto de 2017',
    likes: 26,
    image: LogoEva,
    description:
      'Lorem fistrum no te digo trigo por no llamarte Rodrigor a gramenawer ese que llega de la pradera. De la pradera a wan a gramenawer diodeno ese que llega. Ese hombree fistro al ataquerl pupita jarl al ataquerl. Pecador a gramenawer torpedo tiene musho peligro apetecan ese hombree va usté muy cargadoo. No puedor sexuarl mamaar me cago en tus muelas a peich la caidita. Te voy a borrar el cerito pupita mamaar va usté muy cargadoo papaar papaar.',
    heart: true,
  },
  {
    name: 'Mabel Pines',
    date: 'Domingo 1 de junio de 2017',
    likes: 45,
    image: LogoMabel,
    description:
      'Lorem fistrum no te digo trigo por no llamarte Rodrigor a gramenawer ese que llega de la pradera. De la pradera a wan a gramenawer diodeno ese que llega. Ese hombree fistro al ataquerl pupita jarl al ataquerl. Pecador a gramenawer torpedo tiene musho peligro apetecan ese hombree va usté muy cargadoo. No puedor sexuarl mamaar me cago en tus muelas a peich la caidita. Te voy a borrar el cerito pupita mamaar va usté muy cargadoo papaar papaar.',
    heart: true,
  },
];

const peopleItems = people.map((people, index) => {
  if (!people.likes) {
    people.heart = false;
  }

  return (
    <li key={index}>
      <Mediacard
        image={people.image}
        name={people.name}
        date={people.date}
        likes={people.likes}
        description={people.description}
        heart={people.heart}
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
