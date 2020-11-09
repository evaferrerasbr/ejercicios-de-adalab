import React from 'react';
import Clock from './Clock';
import '../stylesheets/App.scss';
import SheepCounter from './SheepCounter';

class App extends React.Component {
  constructor() {
    super();
    this.image = '';
    this.getCounter = this.getCounter.bind(this);
  }

  getCounter(param) {
    this.image = param + 1;
  }

  render() {
    return (
      <div className="App">
        <Clock />
        <SheepCounter getCounter={this.getCounter} />
      </div>
    );
  }
}

export default App;
