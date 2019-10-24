import React from 'react';
import './App.css';
import ProfilePage from './components/ProfilePage';
import { Route } from 'react-router-dom';
import ValuesList from './components/ValuesList';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Route exact path='/' component={ProfilePage} />
        <Route path='/values' component={ValuesList} />
      </header>
    </div>
  );
}

export default App;
