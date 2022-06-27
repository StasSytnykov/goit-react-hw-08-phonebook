const getLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

export { getLoggedIn, getUserName };
