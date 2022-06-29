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
      <ContactForm />
      <Filter />
      <ContactsList />
    </>
  ) : (
    <Navigate to={'/login'} />
  );
};
