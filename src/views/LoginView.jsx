import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getLoggedIn } from 'redux/auth/authSelectors';
import { AuthForm } from 'components/AuthForm/AuthForm';

const LoginView = ({ restricted = false }) => {
  const isLoggedIn = useSelector(getLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? (
    <Navigate to={'/contacts'} />
  ) : (
    <AuthForm title={'Login'} />
  );
};

LoginView.propTypes = {
  restricted: PropTypes.bool.isRequired,
};

export default LoginView;
