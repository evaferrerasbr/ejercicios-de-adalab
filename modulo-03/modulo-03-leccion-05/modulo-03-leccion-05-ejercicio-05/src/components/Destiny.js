import React from 'react';
import CityImage from './CityImage';
import CitySelector from './CitySelector';

class Destiny extends React.Component {
  constructor(props) {
    super(props);
    this.city = 'Tokio';
    this.saveChange = this.saveChange.bind(this);
  }

  saveChange(param) {
    const selectedDestiny = param;
    this.city = selectedDestiny;
    this.forceUpdate();
  }

  render() {
    return (
      <>
        <CitySelector selectDestiny={this.saveChange} />
        <CityImage className="imgDestiny" cityImage={this.city} />
      </>
    );
  }
}

export default Destiny;
