import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
    },

    removeContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },

    filterName: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export default contactsSlice.reducer;

export const { addContact, removeContact, filterName } = contactsSlice.actions;

// const initialState = {
//   contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
//   filter: '',
// };
