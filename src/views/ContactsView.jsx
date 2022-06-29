import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactsList } from 'components/ContactsList';
import { getLoggedIn } from 'redux/auth/authSelectors';

export const ContactsView = () => {
  const isLoggedIn = useSelector(getLoggedIn);

  return isLoggedIn ? (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </>
  ) : (
    <Navigate to={'/login'} />
  );
};
