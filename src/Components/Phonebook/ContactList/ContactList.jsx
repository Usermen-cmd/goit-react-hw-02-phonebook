const ContactList = ({ stateData }) => {
  return (
    <ul>
      {stateData.map(el => {
        return (
          <li key={el.id}>
            {el.name} : {el.number}
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
