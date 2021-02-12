import React, { lazy, useEffect, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './redux/Routs/PrivateRouts';
import PublicRoute from './redux/Routs/PublicRoute';
import authOperations from './redux/auth/auth-operations';
import { fetchContacts } from './redux/operations';
import AppBar from './components/UserMenu/AppBar';

const PhonebookViews = lazy(() => import('./views/PhonebookViews'));
const Login = lazy(() => import('./views/Login'));
const HomeView = lazy(() => import('./views/HomeView'));
const Registration = lazy(() => import('./views/Registration'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(authOperations.currentUser()), [dispatch]);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <AppBar />
      <hr />
      <Switch>
        <Suspense fallback={<p>LOADING...</p>}>
          {/* <Route exact path="/" component={HomeView} /> */}
          {/* <Route exact path="/login" component={Login} /> */}
          {/* <Route exact path="/registration" component={Registration} /> */}
          {/* <Route exact path="/contacts" component={PhonebookViews} /> */}

          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>

          <PublicRoute restricted path="/login" redirectTo="/contacts">
            <Login />
          </PublicRoute>

          <PublicRoute restricted path="/registration" redirectTo="/login">
            <Registration />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <PhonebookViews />
          </PrivateRoute>
        </Suspense>
      </Switch>
    </div>
  );
}
