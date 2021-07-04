import PropTyps from 'prop-types';

import { Find } from 'styles/Find';

const Filter = ({ onFilterChange, buttonTitle, onSortClick }) => {
  return (
    <Find>
      <h4>Find contact by name</h4>
      <div>
        <input type="text" onChange={onFilterChange} placeholder="Enter Name" />
        <button type="button" onClick={onSortClick}>
          Sort by {buttonTitle}
        </button>
      </div>
    </Find>
  );
};

Filter.propTyps = {
  onFilterChange: PropTyps.func.isRequired,
};

export default Filter;
