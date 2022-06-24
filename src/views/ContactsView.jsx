import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactsList } from 'components/ContactsList';

export const ContactsView = () => (
  <>
    <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
    <Filter />
    <ContactsList />
  </>
);
