import '../stylesheets/App.scss';
import HalfPage from './HalfPage';

function App() {
  return (
    <>
      <h1>Hola mundo</h1>
      <div className="App">
        <HalfPage className="left">
          <div>Izquierda</div>
        </HalfPage>
        <HalfPage className="right">
          <div>Derecha</div>
        </HalfPage>
      </div>
    </>
  );
}

export default App;
