import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const writtenText = ev.currentTarget.value;
    this.props.saveText(writtenText);
  }

  render() {
    return (
      <form>
        <input type="text" onChange={this.handleChange} />
      </form>
    );
  }
}

export default Form;
