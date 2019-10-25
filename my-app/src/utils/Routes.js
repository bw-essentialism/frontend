import React from 'react';
import Login from '../components/login';
import Register from '../components/registration';
import Navigation from '../components/navbar';
import Profile from '../components/profile';
import PrivateRoute from './PrivateRoute';
import { Route, Link } from 'react-router-dom';
import Values from '../components/ValuesList';

const Routes = () => {
  return (
    <div>
      {/* ALl Routes Go here from now on!*/}
      <Route path='/' component={Navigation} />
      <Route exact path='/' component={Login} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <PrivateRoute exact path='/valueslist' component={Values} />
      <PrivateRoute exact path='/profile' component={Profile} />
    </div>
  );
};

export default Routes;
