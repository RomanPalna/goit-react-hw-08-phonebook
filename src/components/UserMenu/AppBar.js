import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getisloggedIn);
  console.log(isLoggedIn);
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

export default AppBar;
