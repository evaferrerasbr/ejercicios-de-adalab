import React from 'react';
import { Link } from 'react-router-dom';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  componentDidMount() {
    console.log('soy componentDidMount');
    this.intervalId = setInterval(this.incrementCounter, 1000);
  }

  componentWillUnmount() {
    console.log('soy componentWillUnmount');
    clearInterval(this.intervalId);
  }

  incrementCounter() {
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  }

  render() {
    console.log('soy render');
    return (
      <>
        <div>Contador: {this.state.counter}</div>
        <Link to="/relax">¿Te quieres relajar un ratete?</Link>
      </>
    );
  }
}

export default Counter;
