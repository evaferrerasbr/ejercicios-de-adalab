import React from 'react';
import '../stylesheets/App.scss';

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      counter: 0,
    };
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
    this.props.getCounter(this.state.counter);
  }

  render() {
    return (
      <>
        <div className="SheepCounter">{this.state.counter + ` ovejas`}</div>
        <button className="btn" onClick={this.handleClick}>
          Contador
        </button>
      </>
    );
  }
}

export default SheepCounter;
