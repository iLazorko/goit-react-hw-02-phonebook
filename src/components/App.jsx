import React, { Component } from 'react';
import { ContactsForm } from './contactsForm/ContactsForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';
import { Wrapper, Title, Heading } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',

    // для тестування фільтра
    //  contacts: [
    //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    //   ],
  };

  handleChangeFilter = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  contactsCatalog = newContact => {
    if (
      this.state.contacts.some(
        contactPerson =>
          contactPerson.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts.filter(contact => contact.id !== id)],
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <>
        <Wrapper>
          <Heading>Phonebook</Heading>
          <ContactsForm contactsCatalog={this.contactsCatalog} />
          <Title>Contacts</Title>
          <Filter onChange={this.handleChangeFilter} />
          <ContactList
            contacts={contacts}
            filter={filter}
            deleteContact={this.deleteContact}
          />
        </Wrapper>
      </>
    );
  }
}
