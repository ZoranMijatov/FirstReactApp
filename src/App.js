import './App.css';
import Register from './container/Register'
import Login from './container/Login'
import Toggle from './container/ToggleState'
import Dashboard from './container/Dashboard'
import Profile from './container/Profile'
import { useState } from 'react';
import Button from './Button';

function App() {
  
  const [login, setLogin] = useState(false);

  const toggleLogin = () => {
    setLogin(!login);
  }

  return (
    <div className="App">

      <div className="Menu">
        <Button onClick={toggleLogin} type="BtnFilled">
          Toggle Login
        </Button>
        
          <div className="actionButtons">
          {login ? <Profile>Profile</Profile> : <Login>Login</Login>}
          {login ? <Dashboard>Dashboard</Dashboard> : <Register>Register</Register>}

          </div>
      </div>

    </div>
  );
}

export default App;
