import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk('auth/register', async credentials => {
  console.log(credentials);
  const response = await axios.post('/users​/signup', credentials);
  return response.data;
});
