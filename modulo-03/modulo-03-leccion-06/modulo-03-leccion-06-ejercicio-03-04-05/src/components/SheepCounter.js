import React from 'react';
import '../stylesheets/App.scss';

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.sheepArray = [];
    this.html = '';
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      counter: 0,
    };
  }

  handleClick() {
    this.sheepArray.push(this.state.counter);
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
    this.props.getCounter(this.state.counter);
  }

  renderImg() {
    const arrayForRender = this.sheepArray.map((arrayItem) => {
      return (
        <img
          className="img"
          src="http://www.clker.com/cliparts/e/4/8/7/13280460782141411990Cartoon%20Sheep.svg.hi.png"
          alt="ovejita"
        />
      );
    });
    return arrayForRender;
  }

  render() {
    return (
      <>
        <div className="SheepCounter">{this.state.counter + ` ovejas`}</div>
        <button className="btn" onClick={this.handleClick}>
          Contador
        </button>
        {this.renderImg()}
      </>
    );
  }
}

export default SheepCounter;
