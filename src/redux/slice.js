import { addContact, deleteContact, fetchContacts } from './operations';
const { createSlice } = require('@reduxjs/toolkit');
const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};
const slice = createSlice({
  name: 'toolkit',
  initialState,
  extraReducers: {
    [fetchContacts.fulfilled](state, { payload }) {
      state.contacts.items = payload;
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    [fetchContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [addContact.fulfilled](state, { payload }) {
      if (state.contacts.items.name !== payload.name)
        state.contacts.items.push(payload);
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== payload
      );
    },
  },
});
export default slice.reducer;
export const { changeFilter } = slice.actions;
