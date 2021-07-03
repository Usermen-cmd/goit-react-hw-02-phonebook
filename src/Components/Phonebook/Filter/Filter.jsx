const Filter = ({ onFilterChange }) => {
  return (
    <>
      <h2>Contacts</h2>
      <input type="text" onChange={onFilterChange} />
    </>
  );
};

export default Filter;
