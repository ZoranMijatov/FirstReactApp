import './App.css';
import Register from './container/Register'
import Login from './container/Login'
import Dashboard from './container/Dashboard'
import Profile from './container/Profile'
import { useState } from 'react';
import Button from './Button';
import LoginForm from './Form/LoginForm';
import RegisterForm from './Form/RegisterForm';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  
  const [login, setLogin] = useState(false);

  const toggleLogin = () => {
    setLogin(!login);
  }


  return (
    <Router>
      <div className="App">

        <div className="Menu">
          
            <div className="actionButtons">
            {login ? <Profile /> : <Link to="/login"><Login /></Link>}
            {login ? <Dashboard /> : <Link to="/"><Register /></Link>}

            </div>
        </div>
        <Switch>
          <Route exact path='/'>
            <RegisterForm />
          </Route>
          <Route path='/login'>
            <LoginForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
