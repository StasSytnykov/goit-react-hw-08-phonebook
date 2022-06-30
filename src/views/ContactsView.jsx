import { Box } from '@mui/material';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactsList } from 'components/ContactsList';

const ContactsView = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <ContactForm />
      <Filter />
      <ContactsList />
    </Box>
  );
};

export default ContactsView;
