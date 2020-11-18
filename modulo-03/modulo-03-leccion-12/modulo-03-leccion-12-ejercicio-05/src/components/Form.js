import React from 'react';
import '../stylesheets/App.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(ev) {
    const inputValue = ev.currentTarget.value;
    this.props.handleInput(inputValue);
  }

  render() {
    return (
      <input
        type="text"
        onChange={this.handleInput}
        value={this.props.inputValue}
      />
    );
  }
}

export default Form;
