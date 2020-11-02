import '../stylesheets/App.scss';
import Header from './Header';
import Card from './Card';

const card = (
  <div className="App">
    <div className="App-card">
      <Header />
      <Card />
    </div>
  </div>
);

function App() {
  return card;
}

export default App;
