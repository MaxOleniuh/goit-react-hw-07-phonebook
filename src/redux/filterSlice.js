const { createSlice } = require('@reduxjs/toolkit');

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, action) {
      console.log(action.payload);
      return action.payload;
    },
  },
});
export default filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
