import React from 'react';
import '../stylesheets/App.scss';

class MIMIMITranslator extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <p className="text">
        {this.props.preparedText.replace(/[aeiou]/gi, 'i')}
      </p>
    );
  }
}

export default MIMIMITranslator;
