import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import style from './RegisterView.module.css';

const validateEmail = value => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
};

const validatePassword = value => {
  let error;
  if (!value) {
    error = 'Required';
  }
  if (value.length !== 0 && value.length < 6) {
    error = 'Password to short';
  }
  return error;
};

export const UserFormRegister = ({ handleLogin, auth, title }) => {
  const [value, setValue] = useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValue({
      ...value,
      showPassword: !value.showPassword,
    });
  };

  return (
    <Box
      // height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        style={{
          fontSize: '40px',
          fontWeight: 'bold',
          letterSpacing: '-1.5px',
          lineHeight: '2.8',
          marginBottom: '61px',
        }}
        variant="h1"
      >
        {title}
      </Typography>
      <Formik
        initialValues={{
          email: '',
          password: '',
          showPassword: false,
        }}
        onSubmit={values => handleLogin(values.email, values.password)}
      >
        {({ errors, touched, values }) => {
          const password = values.password.length >= 6;

          return (
            <Form>
              <Box className={style.inputThumb}>
                <Typography variant="caption" className={style.inputText}>
                  Email
                </Typography>
                <Field
                  className={style.input}
                  name="email"
                  validate={validateEmail}
                />
                {errors.email && touched.email && (
                  <Typography variant="subtitle1" className={style.helpfulText}>
                    {errors.email}
                  </Typography>
                )}
              </Box>
              <Box className={style.inputThumb}>
                <Typography variant="caption" className={style.inputText}>
                  Password
                </Typography>
                <Field
                  className={style.input}
                  type={value.showPassword ? 'text' : 'password'}
                  name="password"
                  validate={validatePassword}
                />
                <IconButton
                  style={{
                    width: '24px',
                    height: '24px',
                    position: 'absolute',
                    top: '24px',
                    right: '7px',
                  }}
                  size="small"
                  type="button"
                  onClick={handleClickShowPassword}
                >
                  {value.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
                {errors.password && touched.password && (
                  <Typography variant="subtitle1" className={style.helpfulText}>
                    {errors.password}
                  </Typography>
                )}
              </Box>

              <Button
                type="submit"
                disabled={!!errors.email || !password || auth}
              >
                Login
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};
