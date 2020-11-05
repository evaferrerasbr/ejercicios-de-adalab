import React from 'react';
import '../stylesheets/OnionHater.scss';

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.isHating = false;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const container = document.querySelector('.App');
    if (event.currentTarget.value.toLowerCase().includes('cebolla')) {
      this.isHating = true;
      container.classList.add('red');
    } else {
      this.isHating = false;
      container.classList.remove('red');
    }
    this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
        <textarea onChange={this.handleChange}></textarea>
      </div>
    );
  }
}

export default OnionHater;
