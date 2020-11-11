import React from 'react';
import '../stylesheet/App.scss';
import Header from './Header';
import ItemList from './ItemList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header number="2.6" lesson="Estado" title="Zaralab" />
        <main className="container">
          <h2>Zaralab</h2>
          <div className="store"></div>
          <ItemList />
        </main>
      </div>
    );
  }
}

export default App;
