import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './contacts/filterSlice';
import { contactsApi } from './contacts/contactsSlice';
import { userSlice } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: userSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
