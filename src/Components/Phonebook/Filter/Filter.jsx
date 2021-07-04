import PropTyps from 'prop-types';

const Filter = ({ onFilterChange }) => {
  return (
    <>
      <h4>Find contact by name</h4>
      <input type="text" onChange={onFilterChange} />
    </>
  );
};

Filter.propTyps = {
  onFilterChange: PropTyps.func.isRequired,
};

export default Filter;
