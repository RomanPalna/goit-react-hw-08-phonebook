import { NavLink } from 'react-router-dom';

const AuthNav = () => (
  <nav>
    <NavLink to="/login" exact>
      Log In
    </NavLink>

    <NavLink to="/registration" exact>
      Register
    </NavLink>
  </nav>
);

export default AuthNav;
