import React from 'react';
import Login from './components/login';
import Register from './components/registration';
import { Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>Yo</div>
      <Route exact path='/' component={Login} />
      <Route exact path='/register' component={Register} />
    </div>
  );
}

export default App;
