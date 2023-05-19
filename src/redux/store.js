import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filterSlice';
import slice from './slice';
export const store = configureStore({
  reducer: {
    toolkit: slice,
    filter: filterSlice,
  },
});
