import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import Jobs from './pages/Jobs/Index';
import Job from './pages/Job/Index';
import Main from './pages/Main/Index';
// import Schedule from './pages/Schedule/Index'; Descontinuado por falta de tempo para

import history from './services/history';

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/detail" component={Job} />
      </Switch>
    </Router>
  );
}
