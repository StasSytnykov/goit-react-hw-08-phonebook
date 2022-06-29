import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsSlice';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const onAddContact = contact => {
    if (contacts && contacts.some(item => item.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    addContact(contact);
  };

  const onChangeInput = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const onSubmitForm = event => {
    event.preventDefault();

    if (name && number) {
      onAddContact({
        name,
        number,
      });
    } else {
      alert('The number field and name are empty, fill them in!');
    }

    reset(event);
  };

  const reset = event => {
    setName('');
    setNumber('');
    event.currentTarget.reset();
  };

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      autoComplete="off"
      onSubmit={onSubmitForm}
    >
      <Typography variant="h1">Phonebook</Typography>
      <TextField
        sx={{ width: '45ch' }}
        type="text"
        name="name"
        onChange={onChangeInput}
        id="filled-basic"
        label="Name"
        variant="filled"
      />
      <TextField
        sx={{ width: '45ch' }}
        value={number}
        type="tel"
        name="number"
        id="filled-basic"
        label="Number"
        variant="filled"
        onChange={onChangeInput}
      />
      <Button disabled={!name || !number} type="submit">
        Add Contact
      </Button>
    </Box>
  );
};
