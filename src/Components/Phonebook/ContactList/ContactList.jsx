const ContactList = ({ stateData }) => {
  return (
    <ol>
      {stateData.map(el => {
        return (
          <li key={el.id}>
            {el.name} : {el.number}
          </li>
        );
      })}
    </ol>
  );
};

export default ContactList;
