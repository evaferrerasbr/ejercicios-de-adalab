import PropTypes from 'prop-types';

const FilterGender = (props) => {
  const handleChange = (ev) => {
    const data = {
      name: ev.currentTarget.name,
      value: ev.currentTarget.value,
    };
    props.handleFilter(data);
  };

  return (
    <>
      <label className="form__label display-block" htmlFor="gender">
        Género:
      </label>

      <select
        className="form__input-text"
        name="gender"
        id="gender"
        onChange={handleChange}
      >
        <option value="all">All</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="no-binary">No-binary</option>
      </select>
    </>
  );
};

FilterGender.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default FilterGender;
