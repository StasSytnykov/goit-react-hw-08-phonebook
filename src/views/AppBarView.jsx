import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/auth/authSelectors';
import { UserMenu } from 'components/UserMenu/UserMeny';

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  marginRight: '30px',
};

const activeLinkStyle = {
  color: 'pink',
  textDecoration: 'none',
  marginRight: '30px',
};

const AppBarView = () => {
  const isLoggedIn = useSelector(getLoggedIn);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Contacts book
            </Typography>
            {!isLoggedIn ? (
              <>
                <Button>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeLinkStyle : linkStyle
                    }
                    to="/register"
                  >
                    Register
                  </NavLink>
                </Button>
                <Button>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeLinkStyle : linkStyle
                    }
                    to="/login"
                  >
                    Login
                  </NavLink>
                </Button>
              </>
            ) : (
              <UserMenu />
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
};

export default AppBarView;
