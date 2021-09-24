import './App.css';
import {Login, Logout, Register, Cart} from './container/NavbarButtons'
import Dashboard from './container/Sidebar/Dashboard'
import Profile from './container/Sidebar/Profile'
import { useState } from 'react';
import {getLoginData} from './services/authService'
import LoginForm from './Form/LoginForm';
import RegisterForm from './Form/RegisterForm';
import Sidebar from './container/Sidebar/SidebarNav';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import LightModeToggle from './container/LightMode';
import GalaxyStore from './GalaxyStore';
import LoginBackground from './Hero70.jpg';
import LoggedIn from './HeroImg43.jpg';
import CartPage from './GalaxyStore/CartPage';

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
          <div> 
            <div className="HeroImg" style={{backgroundImage: loginSuccess ? `url(${LoggedIn})` : `url(${LoginBackground})`}}>
                <div className="Menu">
                  <svg style={{paddingLeft: "25px"}} height="100" width="190" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 90">
                  <path d="M119.953 20.483q4.021-2.569 8.601-4.021 4.524-1.452 8.937-1.452.558 0 1.173.055.67 0 1.955.112l-5.083 23.906q3.295-4.524 10.5-14.131 7.262-9.607 7.262-9.551h8.21l-21.783 25.022h.614q.28 0 .894-.055h1.229q4.971 0 7.317 2.01 2.402 2.011 2.402 6.312 0 1.843-.391 4.133t-1.732 6.982q-1.061 4.021-1.396 5.697-.335 1.732-.335 3.016 0 1.788.838 3.184.837 1.396 2.234 1.955-2.29.614-4.245 1.005-2.011.335-3.52.335-3.015 0-4.523-1.284-1.564-1.285-1.564-3.966 0-1.34.39-3.24.392-1.899 1.565-6.367 1.34-4.86 1.787-7.093.391-2.235.391-3.854 0-2.681-1.173-4.022-1.173-1.285-3.519-1.285-.39 0-.893.056t-1.676.224l-6.256 29.49h-11.227l11.339-53.173q-5.362 2.179-8.155 6.591-2.793 4.413-2.793 10.557 0 1.452.168 2.569.223 1.061.67 2.122.168.28.168.391.056.112.056.224-4.357 0-6.368-1.843-2.01-1.844-2.01-5.753 0-3.91 2.625-7.82t7.317-7.038zm55.91 3.687q0 2.57-1.843 4.356-1.843 1.788-4.413 1.788-2.569 0-4.356-1.788-1.788-1.787-1.788-4.356 0-2.57 1.788-4.413 1.787-1.843 4.356-1.843 2.57 0 4.413 1.843 1.843 1.843 1.843 4.413zm-19.94 40.55q0-1.005.167-2.29.168-1.285.447-2.793L161.9 34.56h11.227l-5.641 26.586q-.112.727-.224 1.285-.055.615-.055 1.229 0 1.564.726 2.234.726.67 2.457.67 2.179 0 4.133-1.955 1.955-1.899 2.905-4.97h3.295q-2.513 7.149-6.702 10.835-4.245 3.63-9.719 3.63-3.91 0-6.144-2.457t-2.234-6.926zm37.534 3.072q1.732.168 2.625.224.894.111 1.62.111 1.732 0 2.625-.39.894-.392 1.062-1.174-.727-.111-1.118-.502-.39-.447-.39-1.173 0-1.34 1.228-2.346 1.285-1.006 3.128-1.006 1.676 0 2.57 1.006.893 1.005.893 2.737 0 3.24-2.793 5.809-2.737 2.569-6.758 2.569h-20.722l19.94-34.853h-4.357q-2.457 0-3.35.279-.95.335-.95.95l.39.335q.447.279.447 1.396 0 1.843-1.228 3.016-1.173 1.117-2.96 1.117-1.565 0-2.626-.95-1.005-.949-1.005-2.513 0-2.848 2.68-5.362 2.738-2.513 6.424-2.513h20.052l-19.158 33.066q.279 0 .614.055.335.056 1.117.112zm42.84-29.659v.559l.894-4.133h11.227l-5.585 26.586q-.168.727-.28 1.285-.056.615-.056 1.229 0 1.731.782 2.513.782.838 2.402.838 2.067 0 3.687-1.899 1.675-1.955 2.68-5.474h3.296q-2.513 7.206-6.535 10.836-3.966 3.63-9.216 3.63-3.351 0-5.362-1.842-1.955-1.9-2.29-5.307-2.402 3.575-5.362 5.362-2.905 1.788-6.312 1.788-4.803 0-7.596-3.24-2.793-3.295-2.793-9.328 0-4.356 1.34-9.16 1.341-4.747 3.687-8.657 2.905-4.636 6.703-7.094 3.854-2.457 8.378-2.457 3.072 0 4.692 1.06 1.62 1.062 1.62 2.905zm-4.412 21.504l3.742-17.65q0-1.173-.893-2.066-.838-.894-2.346-.894-4.301 0-7.596 7.205-3.352 7.15-3.352 14.187 0 3.072.894 4.58.838 1.564 3.016 1.564 2.067 0 3.966-1.955 1.899-1.954 2.57-4.97zM26.387 24.398h39.215v39.215L90 88.012V0H1.988zm37.226 41.204H24.398V26.387L0 1.988V90h88.012z" fill="#fff"/>
                  </svg>
                  <div>
                  {loginSuccess ? <div style={{display: 'flex', alignItems: 'center', gap: '30px'}}><Redirect to = "/dashboard"></Redirect><LightModeToggle /><Cart /><Logout handleClick={handleLogout} /></div> : <Link to="/login"><Login /></Link>}
                  {loginSuccess ? null : <Link to="/"><Register /></Link>}
                  </div>
                </div>
                <div style={{display: "flex", paddingTop: "50px"}}>
                  {loginSuccess ? <Sidebar /> : null}
                  <Switch>
                    <Route exact path='/'>
                      <RegisterForm />
                    </Route>
                    <Route path='/login'>
                      <LoginForm handleLogin={handleLogin} />
                    </Route>
                      {loginSuccess ? 
                      <><Route path='/dashboard' component={Dashboard} /><Route path='/profile' component={Profile} /><Route path='/galaxystore' component={GalaxyStore} /><Route path='/cart' component={CartPage} /></> 
                      : <Redirect to = "/login" /> }
                  </Switch>
                </div>
              </div>
            </div>
        </Router>
  );
}

export default App;
