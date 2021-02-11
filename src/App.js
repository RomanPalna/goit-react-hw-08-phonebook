import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import PhonebookViews from './views/PhonebookViews';
import Login from './views/Login';
import HomeView from './views/HomeView';
import Registration from './views/Registration';
import AppBar from './components/UserMenu/AppBar';

// import { fetchContacts } from './redux/operations';

export default function App() {
  // const dispatch = useDispatch();

  // useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <div>
      <AppBar />
      <hr />
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/contacts" component={PhonebookViews} />
      </Switch>
    </div>
  );
}
