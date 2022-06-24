import { Routes, Route, Navigate } from 'react-router-dom';
import { ContactsView } from 'views/ContactsView';
import { HomePageView } from 'views/HomePageView';
import { UserFormRegister } from 'views/RegisterView/RegisterView';

export const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<HomePageView />}>
        <Route path="/register" element={<UserFormRegister />} />
        <Route path="/login" element={<ContactsView />} />
        <Route path="/contacts" element={<ContactsView />} />
      </Route>
    </Routes>
  );
};
