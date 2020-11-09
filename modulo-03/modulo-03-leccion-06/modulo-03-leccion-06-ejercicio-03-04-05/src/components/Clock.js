import React from 'react';
import '../stylesheets/App.scss';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: '',
      minutes: '',
      seconds: '',
    };
    this.updateClock = this.updateClock.bind(this);
    setInterval(this.updateClock, 1000);
  }

  updateClock() {
    const date = new Date();
    this.setState({
      hour: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    });
  }

  render() {
    return (
      <p className="Clock">
        {this.state.hour}:{this.state.minutes}:{this.state.seconds}
      </p>
    );
  }
}

export default Clock;
