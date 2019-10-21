import React from 'react';
import './App.css';
import ProfilePage from './components/ProfilePage';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Route exact path='/' component={ProfilePage} />
      </header>
    </div>
  );
}

export default App;
