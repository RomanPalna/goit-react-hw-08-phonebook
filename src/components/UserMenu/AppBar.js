import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';

function AppBar() {
  return (
    <header>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </header>
  );
}

export default AppBar;
