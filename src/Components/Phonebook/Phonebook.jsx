import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from 'Components/Phonebook/ContactForm/ContactForm';
import Filter from 'Components/Phonebook/Filter/Filter';
import ContactList from 'Components/Phonebook/ContactList/ContactList';

class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  getContactList = data => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, { ...data, id: uuidv4() }] };
    });
  };
  onFilterChange = event => {
    const value = event.target.value;
    this.setState({ filter: value.toLowerCase() });
  };

  getfiltredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(el => el.name.toLowerCase().includes(filter));
  };
  render() {
    const filtredContacts = this.getfiltredContacts();
    return (
      <div>
        <ContactForm getContactList={this.getContactList} />
        <Filter onFilterChange={this.onFilterChange} />
        <ContactList stateData={filtredContacts} />
      </div>
    );
  }
}

export default Phonebook;
