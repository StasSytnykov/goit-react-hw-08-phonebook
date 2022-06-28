import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ContactsView } from 'views/ContactsView';
import { HomePageView } from 'views/AppBar';
import { RegisterView } from 'views/RegisterView';
import { LoginForm } from 'views/LoginViews';
import { fetchCurrentUser } from 'redux/auth/authOperations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<HomePageView />}>
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/contacts" element={<ContactsView />} />
      </Route>
    </Routes>
  );
};
