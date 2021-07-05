import { Component } from 'react';
//Components
import ContactForm from 'Components/Phonebook/ContactForm/ContactForm';
import Filter from 'Components/Phonebook/Filter/Filter';
import ContactList from 'Components/Phonebook/ContactList/ContactList';
//Utils
import arraySort from 'array-sort';
//Styles
import { Container } from 'styles/Container';
import { HeaderPrimary } from 'styles/HeaderPrimary';
import { SecondaryHeader } from 'styles/SecondaryHeader';

class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    toggleSort: false,
  };

  isNameUnique = (name, contacts) => {
    const hasName = contacts.find(el => el.name === name);
    return hasName ? false : true;
  };

  setContactList = (newContact, contactId) => {
    this.setState(prevState => {
      const isUnique = this.isNameUnique(newContact.name, prevState.contacts);
      if (isUnique) {
        return {
          contacts: [...prevState.contacts, { ...newContact, id: contactId }],
        };
      } else {
        alert(`имя ${newContact.name} есть в списке контактов`);
      }
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

  onSortClick = () => {
    this.setState(prevState => {
      const sortedByName = arraySort(prevState.contacts, 'name', {
        reverse: prevState.toggleSort,
      });
      return {
        contacts: [...sortedByName],
        toggleSort: !prevState.toggleSort,
      };
    });
  };

  render() {
    const filtredContacts = this.getfiltredContacts();
    const entryContactList = this.setEntryContactList(filtredContacts);
    return (
      <Container>
        <HeaderPrimary>Phonebook</HeaderPrimary>
        <ContactForm setContactList={this.setContactList} />
        <SecondaryHeader>Contacts</SecondaryHeader>
        <Filter
          onFilterChange={this.onFilterChange}
          buttonTitle={this.state.toggleSort ? 'Z-A' : 'A-Z'}
          onSortClick={this.onSortClick}
        />
        <ContactList
          contacts={filtredContacts}
          optionList={entryContactList}
          onDelClick={this.onDelClick}
        />
      </Container>
    );
  }
}

export default Phonebook;
