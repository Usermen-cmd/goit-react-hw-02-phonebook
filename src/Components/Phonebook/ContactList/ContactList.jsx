import PropTypes from 'prop-types';
//Styles
import { List } from 'styles/List';

const ContactList = ({ contacts, optionList, onDelClick }) => {
  return (
    <>
      {contacts.length ? (
        <List>
          {contacts.map(el => {
            return (
              <li key={el.id} data-id={el.id}>
                <span>
                  {el.name} : {el.number}
                </span>
                <button type="button" onClick={onDelClick} data-id={el.id}>
                  delete
                </button>
              </li>
            );
          })}
        </List>
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
