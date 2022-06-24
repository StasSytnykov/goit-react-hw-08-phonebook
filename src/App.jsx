import { Routes, Route, Navigate } from 'react-router-dom';
import { ContactsView } from 'views/ContactsView';
import { HomePageView } from 'views/HomePageView';
import { RegisterView } from 'views/RegisterView';
import { LoginForm } from 'views/LoginViews';

export const App = () => {
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
