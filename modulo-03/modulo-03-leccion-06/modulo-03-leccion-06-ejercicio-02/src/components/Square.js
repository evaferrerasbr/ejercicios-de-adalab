import React from 'react';
import '../stylesheets/App.scss';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick();
  }

  render() {
    return (
      <div
        className={`Square + ${this.props.color}`}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default Square;
