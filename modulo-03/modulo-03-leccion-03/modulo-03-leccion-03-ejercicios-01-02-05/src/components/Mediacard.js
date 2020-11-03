import React from 'react';
import Header from './Header';
import Main from './Main';
import logo from '../images/mabelpines.jpg';

const text =
  'Lorem fistrum no te digo trigo por no llamarte Rodrigor a gramenawer ese que llega de la pradera. De la pradera a wan a gramenawer diodeno ese que llega. Ese hombree fistro al ataquerl pupita jarl al ataquerl. Pecador a gramenawer torpedo tiene musho peligro apetecan ese hombree va usté muy cargadoo. No puedor sexuarl mamaar me cago en tus muelas a peich la caidita. Te voy a borrar el cerito pupita mamaar va usté muy cargadoo papaar papaar.';

class Mediacard extends React.Component {
  render() {
    return (
      <div className="App-card">
        <Header image={logo} name={this.props.name} date={this.props.date} />
        <Main description={text} likes={this.props.likes} />
      </div>
    );
  }
}

export default Mediacard;
