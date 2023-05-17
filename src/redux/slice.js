const { createSlice } = require('@reduxjs/toolkit');

export const slice = createSlice({
  name: 'toolkit',
  initialState: {
    contacts: [
      // { name: 'Max', number: '901-122-4421', id: 'PMGiyvcatsG-XcVJw1bAk' },
    ],
    filter: '',
  },
  reducers: {
    create(state, action) {
      state.contacts.push(action.payload);
    },
    remove(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
export default slice.reducer;
export const { create, remove, changeFilter } = slice.actions;
