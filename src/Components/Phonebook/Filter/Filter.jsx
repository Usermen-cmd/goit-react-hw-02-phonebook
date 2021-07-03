const Filter = ({ onFilterChange }) => {
  return (
    <>
      <h4>Find contact by name</h4>
      <input type="text" onChange={onFilterChange} />
    </>
  );
};

export default Filter;
