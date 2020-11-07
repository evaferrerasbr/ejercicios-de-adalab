import React from 'react';

class CategoryButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    this.props.filterFunction(this.props.category);
  }

  render() {
    return (
      <button className="btn" onClick={this.handleClick}>
        {this.props.category}
      </button>
    );
  }
}

export default CategoryButton;
