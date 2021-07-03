import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from 'Components/Phonebook/ContactForm/ContactForm';
import Filter from 'Components/Phonebook/Filter/Filter';
import ContactList from 'Components/Phonebook/ContactList/ContactList';

class Phonebook extends Component {
  state = {
    contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' }],
    filter: '',
  };
  getContactList = data => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, { ...data, id: uuidv4() }] };
    });
  };

  render() {
    return (
      <div>
        <ContactForm getContactList={this.getContactList} />
        <Filter />
        <ContactList stateData={this.state.contacts} />
      </div>
    );
  }
}

export default Phonebook;
