import React from 'react';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { PhoneBook, ContactsTitle, ContactsWper } from './App.styled';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const checkDuplicate = data =>
    contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <PhoneBook>
      <Form checkDuplicate={checkDuplicate} />
      <ContactsWper>
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        <ContactList contacts={filteredContacts()} />
      </ContactsWper>
    </PhoneBook>
  );
};
