import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ContactsView } from 'views/ContactsView';
import { AppBarView } from 'views/AppBarView';
import { RegisterView } from 'views/RegisterView';
import { LoginView } from 'views/LoginView';
import { fetchCurrentUser } from 'redux/auth/authOperations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="*" element={<Navigate to="/register" />} />
      <Route path="/" element={<AppBarView />}>
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/register" element={<RegisterView restricted />} />
        <Route path="/login" element={<LoginView restricted />} />
      </Route>
    </Routes>
  );
};
