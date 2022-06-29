import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getLoggedIn } from 'redux/auth/authSelectors';
import { AuthForm } from 'components/AuthForm/AuthForm';

export const RegisterView = ({ restricted = false }) => {
  const isLoggedIn = useSelector(getLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? (
    <Navigate to={'/contacts'} />
  ) : (
    <AuthForm title={'Register'} />
  );
};

RegisterView.propTypes = {
  restricted: PropTypes.bool.isRequired,
};
