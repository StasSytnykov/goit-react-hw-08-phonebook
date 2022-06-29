import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLoggedIn } from 'redux/auth/authSelectors';
import { AuthForm } from 'components/AuthForm/AuthForm';
// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/authOperations';

export const RegisterView = ({ restricted = false }) => {
  const isLoggedIn = useSelector(getLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? (
    <Navigate to={'/contacts'} />
  ) : (
    <AuthForm title={'Register'} />
  );
};
