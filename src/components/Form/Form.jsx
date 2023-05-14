import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { PhonebookForm, SubmitBtn, FormTitle, FormItem } from './Form.styled';
import { addContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const Form = ({ checkDuplicate }) => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const handleChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };
  const onFormSubmit = e => {
    e.preventDefault();

    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    checkDuplicate(contact)
      ? alert(`${contact.name} is already in your contacts.`)
      : dispatch(addContact(contact));

    setName('');
    setNumber('');
  };
  return (
    <PhonebookForm>
      <form onSubmit={onFormSubmit}>
        <FormTitle>Phonebook</FormTitle>
        <FormItem>Name</FormItem>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <FormItem>Number</FormItem>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </form>
    </PhonebookForm>
  );
};
