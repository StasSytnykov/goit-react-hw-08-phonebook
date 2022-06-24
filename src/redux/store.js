import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './auth/filterSlice';
import { contactsApi } from './auth/authSlice';
import { contactsSlice } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
