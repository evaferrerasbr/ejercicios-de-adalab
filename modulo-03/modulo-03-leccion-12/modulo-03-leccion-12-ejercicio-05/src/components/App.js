import React from 'react';
import Form from './Form';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      value: '',
    };
  }

  handleInput(inputValue) {
    this.setState({
      value: inputValue,
    });
  }

  componentDidMount() {
    const dataLocal = localStorage.getItem('value');
    if (dataLocal !== null) {
      this.setState({
        value: dataLocal,
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('value', this.state.value);
  }

  render() {
    return (
      <>
        <form className="App">
          <Form handleInput={this.handleInput} inputValue={this.state.value} />
        </form>
      </>
    );
  }
}

export default App;
