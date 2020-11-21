import PropTypes from 'prop-types';

const FilterName = (props) => {
  const handleChange = (ev) => {
    const data = {
      name: ev.currentTarget.name,
      value: ev.currentTarget.value,
    };
    props.handleFilter(data);
  };

  return (
    <>
      <label className="form__label display-block" htmlFor="name">
        Filtrar por nombre:
      </label>
      <input
        className="form__input-text"
        type="text"
        name="name"
        id="name"
        value={props.value}
        onChange={handleChange}
      />
    </>
  );
};

FilterName.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default FilterName;
