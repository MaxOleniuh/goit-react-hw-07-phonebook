const { createSlice } = require('@reduxjs/toolkit');

const slice = createSlice({
  name: 'toolkit',
  initialState: {
    contacts: [
      { name: 'Max', number: '901-122-4421', id: 'PMGiyvcatsG-XcVJw1bAk' },
    ],
    filter: '',
  },
  reducers: {
    create(state, action) {
      state.contacts.push(action.payload);
      console.log(create());
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
