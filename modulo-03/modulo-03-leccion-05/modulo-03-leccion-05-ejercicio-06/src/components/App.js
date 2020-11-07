import React from 'react';
import TextInput from './TextInput';
import MIMIMITranslator from './MIMIMITranslator';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.textToTranslate = '';
    this.prueba = '';
    this.saveText = this.saveText.bind(this);
  }

  saveText(param) {
    this.textToTranslate = param;
    this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
        <TextInput savedText={this.saveText} />
        <MIMIMITranslator preparedText={this.textToTranslate} />
      </div>
    );
  }
}

export default App;
