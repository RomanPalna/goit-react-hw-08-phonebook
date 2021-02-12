const getisloggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getRefreshing = state => state.auth.isRefreshing;

const authSelectors = {
  getisloggedIn,
  getUsername,
  getRefreshing,
};

export default authSelectors;
