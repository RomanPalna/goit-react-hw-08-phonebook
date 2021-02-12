import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../auth/auth-selectors';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

export default function PrivateRoute({
  children,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getisloggedIn);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
