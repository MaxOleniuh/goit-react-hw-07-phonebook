import axios from 'axios';
import { fetchingError, fetchingInProgress, fetchingSuccess } from './slice';

axios.defaults.baseURL = 'https://6454e398f803f34576340577.mockapi.io';

const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.post('/contacts');
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    dispatch(fetchingError(e.message));
  }
};

const addContact = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.post('/contacts');
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    dispatch(fetchingError(e.message));
  }
};

const deleteContact = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.post('/contacts');
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    dispatch(fetchingError(e.message));
  }
};
