import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post(
      'https://connections-api.herokuapp.com/users/signup',
      credentials
    );

    return data;
  } catch (error) {
    console.log(error);
  }
});

export const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post(
      'https://connections-api.herokuapp.com/users/login',
      credentials
    );

    return data;
  } catch (error) {
    console.log(error);
  }
});
