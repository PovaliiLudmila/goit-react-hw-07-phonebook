import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { contactSlice } from 'redux/createSlice';

const App = () => {
  // const contacts = useSelector(state => state.contactState.contacts);
  // const filter = useSelector(state => state.contactState.filter);
  // const dispatch = useDispatch();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;