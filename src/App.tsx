import React from 'react';
import User from './view/User'
import Test from './view/Test'
import Red from './view/useReducer'
import './App.css';

function App() {
  return (
    <div className="App">
      <User name='vortesnail' age={25} >hello</User>
      <Test/>
      <Red />
    </div>
  );
}

export default App;
