import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './auth/filterSlice';
import { contactsApi } from './auth/authSlice';
import { userSlice } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
