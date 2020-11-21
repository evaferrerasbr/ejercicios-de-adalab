import PropTypes from 'prop-types';

const FilterLocation = (props) => {
  const handleChange = (ev) => {
    const data = {
      name: ev.currentTarget.name,
      value: ev.currentTarget.value,
      checked: ev.currentTarget.checked,
    };
    props.handleFilter(data);
  };

  return (
    <>
      <label className="form__label display-block" htmlFor="gender">
        Ciudad:
      </label>
      {props.cities.map((cityName, index) => {
        return (
          <label key={index} className="display-block">
            <input
              type="checkbox"
              name="location"
              value={cityName}
              onChange={handleChange}
            />
            {cityName}
          </label>
        );
      })}
    </>
  );
};

FilterLocation.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default FilterLocation;
