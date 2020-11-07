import React from 'react';
import '../stylesheets/OnionHater.scss';

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.isHating = false;
    this.compClass = '';
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.currentTarget.value.toLowerCase().includes('cebolla')) {
      this.isHating = true;
      this.compClass = 'red';
    } else {
      this.isHating = false;
      this.compClass = '';
    }
    this.forceUpdate();
  }

  render() {
    return (
      <div className="OnionComponent">
        <textarea
          className={this.compClass}
          onChange={this.handleChange}
        ></textarea>
      </div>
    );
  }
}

export default OnionHater;
