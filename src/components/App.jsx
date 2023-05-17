import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import List from './List/List';
import Filter from './Filter/Filter';
import { create } from 'redux/slice';
export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.toolkit.contacts);
  const filter = useSelector(state => state.toolkit.filter);

  const addUser = data => {
    const newContact = {
      ...data,
      id: nanoid(),
    };
    if (contacts.filter(contact => contact.name === data.name).length) {
      alert(data.name + ' is already in contacts!');
    } else dispatch(create(newContact));
  };

  const filteredContacts = () => contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  const setFilterValue = data => {
    dispatch(filter(data));
  }

    return (
      <>
        <h2>Phonebook</h2>
        <Form addUser={addUser} />
        <h3>Contacts</h3>
        <Filter setFilterValue={setFilterValue} />
        <List contacts={filteredContacts()} />
      </>
    );
  }