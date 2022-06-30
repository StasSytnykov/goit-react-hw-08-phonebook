import { Grid, List, Box } from '@mui/material';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import TableContainer from '@mui/material/TableContainer';
// import Container from '@mui/material/Container';
// import Paper from '@mui/material/Paper';
import { ContactListItem } from './ContactListItem';
import { useFilter } from 'hooks/filterHook';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';
import { useMemo } from 'react';

export const ContactsList = () => {
  const { filter } = useFilter();
  const { data: contacts } = useGetContactsQuery();

  const filteredContacts = useMemo(() => {
    return (
      contacts?.filter(contact =>
        contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      ) ?? []
    );
  }, [filter, contacts]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      // maxWidth={1000}
      sx={{ flexGrow: 1 }}
    >
      {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer> */}
      <Grid item xs={12} md={6}>
        <List>
          {filteredContacts &&
            filteredContacts.map(({ name, number, id }) => (
              <ContactListItem key={id} name={name} number={number} id={id} />
            ))}
        </List>
      </Grid>
    </Box>
  );
};
