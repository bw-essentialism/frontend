import React from 'react';
import Login from '../components/login';
import Register from '../components/registration';
import Navigation from '../components/navbar';
import { Route, Link } from 'react-router-dom';

const Routes = () => {
  return (
    <div>
      {/* ALl Routes Go here from now on!*/}
      <Route path ="/" component={Navigation}/>
      <Route exact path='/' component={Login} />
      <Route exact path='/register' component={Register} />
    </div>
  );
}

export default Routes;
