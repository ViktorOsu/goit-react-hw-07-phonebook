import React, { useEffect } from 'react';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { PhoneBook, ContactsTitle, ContactsWper } from './App.styled';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { selectContacts, selectFilter } from '../redux/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
        {contacts && <ContactList contacts={filteredContacts()} />}
      </ContactsWper>
    </PhoneBook>
  );
};
