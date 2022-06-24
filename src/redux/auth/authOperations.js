import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    console.log(credentials);
    const response = await axios.post('/users​/signup', credentials);
    console.log(response);
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error);
  }
});
