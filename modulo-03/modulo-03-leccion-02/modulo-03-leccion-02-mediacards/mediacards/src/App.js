import logo from './mabelpines.jpg';
import './App.scss';

const cardHeader = (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <div className="App-wrapper">
      <h1 className="App-title">Álex Guerrero</h1>
      <h2 className="App-subtitle">Lunes 26 de junio de 2017</h2>
    </div>
  </header>
);

const cardMain = (
  <main className="App-section">
    <p className="App-paragraph">
      Lorem fistrum no te digo trigo por no llamarte Rodrigor a gramenawer ese
      que llega de la pradera. De la pradera a wan a gramenawer diodeno ese que
      llega. Ese hombree fistro al ataquerl pupita jarl al ataquerl. Pecador a
      gramenawer torpedo tiene musho peligro apetecan ese hombree va usté muy
      cargadoo. No puedor sexuarl mamaar me cago en tus muelas a peich la
      caidita. Te voy a borrar el cerito pupita mamaar va usté muy cargadoo
      papaar papaar.
    </p>
    <div className="App-moreinfo">
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Leer más...
      </a>
      <i class="App-heart fa fa-heart" aria-hidden="true"></i>
    </div>
  </main>
);

const card = (
  <div className="App">
    <div className="App-card">
      {cardHeader}
      {cardMain}
    </div>
  </div>
);

function App() {
  return card;
}

export default App;
