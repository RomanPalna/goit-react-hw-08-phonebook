const getisloggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;

const authSelectors = {
  getisloggedIn,
  getUsername,
};

export default authSelectors;
