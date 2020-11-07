import React from 'react';
import CityImage from './CityImage';

class Destiny extends React.Component {
  constructor(props) {
    super(props);
    this.city = '';
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const selectedDestiny = ev.currentTarget.value;
    this.city = selectedDestiny;
    this.forceUpdate();
  }

  render() {
    return (
      <>
        <select
          className="selectDestiny"
          name="select"
          onChange={this.handleChange}
        >
          <option value="Tokio">Tokio</option>
          <option value="Sydney">Sydney</option>
          <option value="Boston">Boston </option>
        </select>
        <CityImage className="imgDestiny" cityImage={this.city} />
      </>
    );
  }
}

export default Destiny;
