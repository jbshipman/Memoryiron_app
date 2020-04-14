import React from 'react';
import './App.css';
import Signup from './components/Users/Signup';
import Signin from './components/Users/Signin';
// import Navbar from './components/Page/';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Memoryiron from './components/Page/Memoryiron.js'

function App () {
  return (
    <Router>
      <div className='App'>
        <Memoryiron />
        //<Navbar /> <br/>
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/home' component={Home} />
      </div>
    </Router>
  )
};

export default App
