import React from 'react';
import '../stylesheets/App.scss';
import ItemList from './ItemList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ItemList />
      </div>
    );
  }
}

export default App;
