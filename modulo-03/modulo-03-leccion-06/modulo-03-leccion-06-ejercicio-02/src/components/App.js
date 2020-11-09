import React from 'react';
import Square from './Square';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      color: '',
    };
  }

  handleClick() {
    this.setState((prevState) => ({
      color: prevState.color === '' ? 'red' : '',
    }));
  }

  render() {
    console.log(this.state.color);
    return (
      <div className="App">
        <Square handleClick={this.handleClick} color={this.state.color} />
      </div>
    );
  }
}

export default App;
