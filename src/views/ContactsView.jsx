import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactsList } from 'components/ContactsList';

const ContactsView = () => {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactsList />
    </>
  );
};

export default ContactsView;
