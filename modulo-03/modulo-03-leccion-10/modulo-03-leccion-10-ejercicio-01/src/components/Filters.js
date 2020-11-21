import PropTypes from 'prop-types';
import FilterGender from './FilterGender';
import FilterLocation from './FilterLocation';
import FilterName from './FilterName';

const Filters = (props) => (
  <section className="filters">
    <form>
      <FilterName handleFilter={props.handleFilter} />
      <FilterGender handleFilter={props.handleFilter} />
      <FilterLocation handleFilter={props.handleFilter} />
    </form>
  </section>
);

Filters.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filters;
