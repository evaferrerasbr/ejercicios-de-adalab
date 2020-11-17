import PropTypes from 'prop-types';

const FilterName = () => {
  const handleChange = (ev) => {};

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
        onChange={handleChange}
      />
    </>
  );
};

FilterName.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default FilterName;
