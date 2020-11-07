import React from 'react';
import '../stylesheets/App.scss';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const textWritten = ev.currentTarget.value;
    return this.props.savedText(textWritten);
  }

  render() {
    return (
      <form>
        <textarea onChange={this.handleChange} className="textarea"></textarea>
      </form>
    );
  }
}

export default TextInput;
