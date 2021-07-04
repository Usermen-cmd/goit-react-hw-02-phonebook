import PropTypes from 'prop-types';

const ContactList = ({ contacts, optionList, onDelClick, onSortClick }) => {
  return (
    <>
      {contacts.length ? (
        <ul>
          <button type="button" onClick={onSortClick}>
            Sort
          </button>
          {contacts.map(el => {
            return (
              <li key={el.id}>
                <span>
                  {el.name} : {el.number}
                </span>
                <button type="button" onClick={onDelClick} data-id={el.id}>
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>{optionList}</p>
      )}
    </>
  );
};

ContactList.defaultProps = {
  optionList: 'Контактов нет',
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDelClick: PropTypes.func.isRequired,
  optionList: PropTypes.string,
};

export default ContactList;
