import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <NavLink to="/" exact>
      Main Page
    </NavLink>

    <NavLink to="/contacts" exact>
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
