const ContactList = ({ contacts, optionList, onDelClick }) => {
  return (
    <>
      {contacts.length ? (
        <ul>
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

export default ContactList;
