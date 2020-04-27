import React from 'react';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm'
import { Route } from  'react-router-dom';
import LandingPage from './components/LandingPage';
import DashBoard from './components/DashBoard';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <div className="App">

      <Route exact path='/'>
        <LandingPage />
      </Route>
      <Route path='/login' component={LoginForm}/>
      <Route path='/signup'>
          <SignupForm />
      </Route>
      <PrivateRoute path='/dashboard' component={DashBoard}/>
    </div>
  );
}

export default App;
