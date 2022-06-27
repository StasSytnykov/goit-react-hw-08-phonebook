import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/auth/authSelectors';
import { logout } from 'redux/auth/authOperations';
// import MenuIcon from '@mui/icons-material/Menu';

export const HomePageView = () => {
  console.log(getLoggedIn);
  const isLoggedIn = useSelector(getLoggedIn);
  const dispatch = useDispatch();
  console.log(isLoggedIn);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link to="/contacts">Contacts List</Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Contacts book
          </Typography>
          {!isLoggedIn ? (
            <>
              <Button color="inherit">
                <Link to="/register">Register</Link>
              </Button>
              <Button color="inherit">
                <Link to="/login">Login</Link>
              </Button>
            </>
          ) : (
            <Button onClick={() => dispatch(logout())} color="inherit">
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
};
