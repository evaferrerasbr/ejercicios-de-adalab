import React from 'react';
import Paragraph from './Paragraph';
import Form from './Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      textValue: '',
    };
    this.saveText = this.saveText.bind(this);
  }

  saveText(param) {
    this.setState({
      textValue: param,
    });
  }

  render() {
    return (
      <div className="App">
        <>
          <Form saveText={this.saveText} />
          <Paragraph value={this.state.textValue} />
        </>
      </div>
    );
  }
}

export default App;
