import './App.css';
import Register from './container/Register'
import Login from './container/Login'
import Logout from './container/Logout'
import Dashboard from './container/Dashboard'
import Profile from './container/Profile'
import { useState } from 'react';
import {getLoginData} from './services/authService'
import LoginForm from './Form/LoginForm';
import RegisterForm from './Form/RegisterForm';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
// if logged in to return dashboard, if not logged in and go to dashboard return 
// login form with router redirect
function App() {
  
  const [loginSuccess, setLoginSuccess] = useState(localStorage.getItem('loginSuccess'));

  const handleLogin = async (username, password) => {
    try {
      await getLoginData(username, password);
      setLoginSuccess(true);
    } catch (error) {
      setLoginSuccess(false);
    }
  }

  const handleLogout = (e) => {
    localStorage.clear();
    setLoginSuccess(false);
  }
  
  return (
    <Router>
      <div className="App">

        <div className="Menu">
          
            <div className="actionButtons">
            {loginSuccess ? <><Profile /><Logout handleClick={handleLogout} /></> : <Link to="/login"><Login /></Link>}
            {loginSuccess ? <Dashboard /> : <Link to="/"><Register /></Link>}
            </div>
        </div>
        <Switch>
          <Route exact path='/'>
            <RegisterForm />
          </Route>
          <Route path='/login'>
            <LoginForm handleLogin={handleLogin} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
