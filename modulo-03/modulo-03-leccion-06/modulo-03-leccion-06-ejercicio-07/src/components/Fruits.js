import React from 'react';

class Fruits extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      popularFruits: ['kiwi', 'pinneaple', 'strawberry'],
      newFruit: '',
    };
  }

  renderFruits() {
    const fruitsForRender = this.state.popularFruits.map((arrayItem, index) => {
      return <li key={index}>{arrayItem}</li>;
    });
    return fruitsForRender;
  }

  handleChange(ev) {
    this.setState({
      newFruit: ev.currentTarget.value,
    });
  }

  handleClick() {
    const updatedFruits = [...this.state.popularFruits, this.state.newFruit];
    this.setState({
      popularFruits: updatedFruits,
    });
  }

  render() {
    return (
      <>
        <ul className="Fruits">{this.renderFruits()}</ul>
        <input type="text" onChange={this.handleChange} />
        <button type="button" onClick={this.handleClick}>
          Añadir
        </button>
      </>
    );
  }
}

export default Fruits;
