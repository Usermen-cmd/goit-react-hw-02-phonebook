import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from 'Components/Phonebook/ContactForm/ContactForm';
import Filter from 'Components/Phonebook/Filter/Filter';
import ContactList from 'Components/Phonebook/ContactList/ContactList';

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  isNameUnique = (name, contacts) => {
    const hasName = contacts.find(el => el.name === name);
    return hasName ? false : true;
  };

  setContactList = newContact => {
    this.setState(prevState => {
      const isUnique = this.isNameUnique(newContact.name, prevState.contacts);

      if (isUnique) {
        return {
          contacts: [...prevState.contacts, { ...newContact, id: uuidv4() }],
        };
      }

      alert(`имя ${newContact.name} есть в списке контактов`);
    });
  };

  onFilterChange = event => {
    const normalizeValue = event.target.value.toLowerCase().trim();
    this.setState({ filter: normalizeValue });
  };

  getfiltredContacts = () => {
    const { contacts, filter } = this.state;
    const filtredContacts = contacts.filter(el =>
      el.name.toLowerCase().includes(filter),
    );
    return filtredContacts;
  };

  setEntryContactList = filtredContacts => {
    const { contacts } = this.state;
    if (filtredContacts.length === 0 && contacts.length === 0) {
      return 'Вы не добавили ни одного контакта';
    }
    return 'Такого контакта в списке не найдено';
  };

  onDelClick = event => {
    const idContact = event.target.dataset.id;
    this.setState(({ contacts }) => {
      const remainderContacts = contacts.filter(el => el.id !== idContact);
      return { contacts: [...remainderContacts] };
    });
  };

  render() {
    const filtredContacts = this.getfiltredContacts();
    const entryContactList = this.setEntryContactList(filtredContacts);
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm setContactList={this.setContactList} />
        <h2>Contacts</h2>
        <Filter onFilterChange={this.onFilterChange} />
        <ContactList
          contacts={filtredContacts}
          optionList={entryContactList}
          onDelClick={this.onDelClick}
        />
      </div>
    );
  }
}

export default Phonebook;
