const ContactList = ({ contacts, optionList }) => {
  return (
    <>
      {contacts.length ? (
        <ol>
          {contacts.map(el => {
            return (
              <li key={el.id}>
                {el.name} : {el.number}
              </li>
            );
          })}
        </ol>
      ) : (
        <p>{optionList}</p>
      )}
    </>
  );
};

export default ContactList;
