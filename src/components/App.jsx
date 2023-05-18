import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import Loader from './Loader/Loader';
import Form from './Form/Form';
import List from './List/List';
import Filter from './Filter/Filter';
export const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const {items, isLoading } = useSelector(getContacts);
  useEffect(() => {
      dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = () => items.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  const setFilterValue = data => {
    dispatch(filter(data));
  }

    return (
      <>
        {isLoading && <Loader />}
        <h2>Phonebook</h2>
        <Form />
        <h3>Contacts</h3>
        <Filter setFilterValue={setFilterValue} />
        <List contacts={filteredContacts()} />
      </>
    );
  }