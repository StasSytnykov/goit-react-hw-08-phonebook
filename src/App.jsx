import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperations';

const AppBarView = lazy(() => import('./views/AppBarView'));
const ContactsView = lazy(() => import('./views/ContactsView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="*" element={<Navigate to="/register" />} />
        <Route path="/" element={<AppBarView />}>
          <Route path="register" element={<RegisterView restricted />} />
          <Route path="/contacts" element={<ContactsView />} />
          <Route path="/login" element={<LoginView restricted />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
