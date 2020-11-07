import React from 'react';

class CitySelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const selectedCity = ev.currentTarget.value;
    this.props.selectDestiny(selectedCity);
  }

  render() {
    return (
      <select
        className="selectDestiny"
        name="select"
        onChange={this.handleChange}
      >
        <option value="Tokio">Tokio</option>
        <option value="Sydney">Sydney</option>
        <option value="Boston">Boston </option>
      </select>
    );
  }
}

export default CitySelector;
