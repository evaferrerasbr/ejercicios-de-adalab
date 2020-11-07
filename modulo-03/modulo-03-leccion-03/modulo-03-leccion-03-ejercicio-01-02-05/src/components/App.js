import React from 'react';
import Medialist from './Medialist';
import '../stylesheets/App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Medialist />
      </div>
    );
  }
}

export default App;
