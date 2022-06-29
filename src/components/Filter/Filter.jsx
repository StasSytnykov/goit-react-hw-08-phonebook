import { Box, TextField, Typography } from '@mui/material';
import { useFilter } from 'hooks/filterHook';

export const Filter = () => {
  const { filter, changeFilter } = useFilter();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        '& > :not(style)': { m: 2 },
      }}
    >
      <Typography variant="h2">Contacts</Typography>
      <TextField
        sx={{ width: '45ch' }}
        type="text"
        name="filter"
        value={filter}
        onChange={event => changeFilter(event.target.value)}
        id="filled-basic"
        label="Find contacts by name"
        variant="filled"
        required
      />
    </Box>
  );
};
