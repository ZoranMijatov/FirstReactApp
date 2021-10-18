import "./App.css";
import { Login, Logout, Register, Cart } from "./container/NavbarButtons";
import Dashboard from "./container/Sidebar/Dashboard";
import Profile from "./container/Profile";
import { getLoginData } from "./services/authService";
import LoginForm from "./Form/LoginForm";
import RegisterForm from "./Form/RegisterForm";
import Sidebar from "./container/Sidebar/SidebarNav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import LightModeToggle from "./container/LightMode";
import GalaxyStore from "./GalaxyStore";
import LoginBackground from "./Hero70.jpg";
import LoggedIn from "./HeroImg43.jpg";
import CartPage from "./GalaxyStore/CartPage";
import CowAbductionSVG from "./CowAbductionSVG";
import { setLogin } from "./Redux/actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const loginSuccess = useSelector((state) => state.Logger.isLoggedIn);

  const dispatch = useDispatch();

  const handleLogin = async (username, password) => {
    try {
      await getLoginData(username, password);
      dispatch(setLogin(true));
    } catch (error) {
      dispatch(setLogin(false));
    }
  };

  const handleLogout = (e) => {
    dispatch(setLogin(false));
  };

  return (
    <Router>
      <div>
        <div
          className="HeroImg"
          style={{
            backgroundImage: loginSuccess
              ? `url(${LoggedIn})`
              : `url(${LoginBackground})`,
          }}
        >
          <div className="Container">
            <div className="Menu">
              <svg
                style={{ marginLeft: "40px" }}
                viewBox="0 0 510 145"
                width="190"
                height="100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M70.093.353c1.22.25 3.485.871 5.078 1.37C90.38 6.5 102.55 16.98 109.596 31.342c2.837 5.775 4.605 11.525 5.526 17.922.473 3.385.398 12.072-.125 15.532-1.643 10.53-5.849 20.137-12.296 28.078l-1.867 2.314h-48.04l-1.917-1.145c-6.447-3.907-12.496-9.857-16.951-16.652-1.27-1.966-4.232-7.691-4.232-8.214 0-.124.822-.647 1.793-1.12 4.28-2.066 6.994-6.447 7.019-11.326 0-6.223-4.406-11.5-10.554-12.595l-1.743-.298.15-1.021c.348-2.414 1.444-6.895 2.365-9.558C34.349 16.782 47.268 4.56 63.049.776c3.783-.92 4.555-.97 7.044-.423Zm2.041 15.184c-1.419.871-1.892 3.136-.946 4.455.274.374 1.668 1.245 3.211 2.017 8.19 4.107 13.616 9.533 17.997 17.897 1.419 2.713 1.767 3.186 2.588 3.609 1.27.597 2.49.373 3.585-.722 1.244-1.245 1.17-2.464-.398-5.7-4.307-8.911-11.376-16.005-20.51-20.585-3.237-1.618-4.208-1.792-5.527-.971Z"
                  fill="#91B8DB"
                />
                <path
                  d="M45.203 1.573C38.557 6.053 32.26 12.65 28.053 19.52c-4.207 6.895-7.194 15.457-8.115 23.223l-.323 2.713-1.419.996c-2.265 1.593-3.933 4.032-4.804 7.044-.622 2.066-.423 5.95.373 7.841 1.37 3.236 3.958 5.9 6.895 7.12.797.323 1.568.597 1.718.597.15 0 .597.746.97 1.692 1.345 3.236 3.884 7.99 5.825 10.903 2.564 3.883 5.277 7.069 8.986 10.628l3.037 2.912h-26.41l-1.867-2.29C6.397 84.76 2.265 75.326.648 64.822c-.598-3.933-.598-12.47 0-16.304 1.916-12.371 7.118-22.95 15.557-31.761C23.722 8.89 33.455 3.29 44.008.702c1.37-.324 2.689-.598 2.938-.598.248 0-.523.672-1.743 1.469Z"
                  fill="#fff"
                />
                <path
                  d="M28.002 50.734c1.195.423 2.24 1.294 3.037 2.514 1.841 2.763 1.369 6.024-1.195 8.264-4.73 4.157-11.973-.498-10.23-6.572.522-1.767 2.389-3.758 4.007-4.256 1.32-.373 3.21-.373 4.38.05ZM108.875 102.135c1.618.523 3.36 1.643 4.331 2.813.996 1.17 2.066 3.585 2.265 5.103l.175 1.319h-5.327c-4.829 0-5.402.05-6.124.498-.423.249-.921.722-1.07.996-.423.796-.348 2.588.149 3.36.822 1.269 1.37 1.369 7.07 1.369h5.227v3.535c0 4.082-.274 5.003-1.743 5.725-.821.423-4.007.448-55.956.448-60.61 0-56.279.124-57.3-1.544-.448-.721-.497-1.244-.497-4.505v-3.659h5.227c5.825 0 6.372-.124 7.119-1.543.523-.996.498-2.465-.05-3.311-.821-1.269-1.369-1.369-7.094-1.369H0l.174-1.269c.498-3.784 3.037-6.821 6.596-7.941 1.544-.498 2.216-.498 51.152-.473 46.896 0 49.634.025 50.953.448ZM76.906 16A47.178 47.178 0 0 1 95.932 32.39c2.051 3.067 4.205 7.541 4.205 8.794.052 2.045-1.384 3.477-3.436 3.477-1.59 0-2.359-.741-3.923-3.886-4.128-8.258-9.949-14.087-18.18-18.228-1.692-.87-3.282-1.841-3.539-2.2-1.102-1.482-.436-4.166 1.231-4.959 1.282-.588 2.36-.46 4.616.614ZM166.2 38.2c-1.7 1.7-1.7 25.9 0 27.6.7.7 4 1.2 8 1.2 8.5 0 8.8-.4 8.8-15s-.3-15-8.8-15c-4 0-7.3.5-8 1.2ZM193.2 60.1c-13.6 12.7-25.5 24.1-26.4 25.2-1.6 1.7-1.8 4.2-1.8 20.1 0 12.8.4 18.6 1.2 19.4 1.6 1.6 14 1.6 15.6 0 .8-.8 1.2-6 1.3-16.3v-15l5.9-5.3 5.8-5.3 14.9 21.6 14.8 21.5 9-.3c8.4-.2 9-.3 9.3-2.4.2-1.5-5-9.8-17.4-27.4l-17.7-25.2 4.9-4.6c25.4-23.8 24.6-22.9 24.2-25.8l-.3-2.8-9.3-.3-9.2-.3-24.8 23.2ZM264.2 38.2c-.8.8-1.2 5.4-1.2 13.9 0 12.1.1 12.9 2.2 14.3 1.2.9 4.3 1.6 6.8 1.6s5.6-.7 6.8-1.6c2.1-1.4 2.2-2.2 2.2-14.3 0-8.5-.4-13.1-1.2-13.9-.7-.7-4-1.2-7.8-1.2s-7.1.5-7.8 1.2ZM306.6 38.6c-1.1 2.8-.6 13 .6 14.2.9.9 7.5 1.2 23.5 1.2 12.3 0 22.3.3 22.3.6 0 .4-2.2 3.2-4.9 6.3-10.1 11.8-9.2 14.6 4.9 13.9l6.4-.3 9.8-11.5 9.7-11.5.1-6c0-3.5-.5-6.6-1.2-7.3-.9-.9-10.2-1.2-35.9-1.2-30.7 0-34.8.2-35.3 1.6ZM417 67.9c-15.5 36.3-15.4 35.1-3.6 35.1 4.7 0 7.7-.5 8.3-1.3.6-.6 4.5-9.6 8.8-20 4.3-10.3 8.1-18.7 8.4-18.7.4 0 5 10.2 10.2 22.7l9.5 22.8-29.2.5c-16.1.3-29.5.7-29.8 1-.8.9-5.6 11.9-5.6 13 0 .5.7 1.6 1.6 2.4 1.3 1.4 6.7 1.6 43.3 1.6 40.5 0 41.8-.1 43.6-2 1.8-1.9 1.4-3-15.5-42.7-9.5-22.5-17.9-41.8-18.7-43.1-1.2-2-2.1-2.2-9.7-2.2h-8.4L417 67.9ZM264.2 74.2c-.9.9-1.2 7.9-1.2 25.4 0 28.201-.3 27.401 9 27.401s9 .8 9-27.4c0-17.5-.3-24.5-1.2-25.4-.7-.7-4-1.2-7.8-1.2s-7.1.5-7.8 1.2ZM322.3 92.2c-1.7 1.8-6.2 7.3-10.2 12.1-7 8.7-7.1 8.9-7.1 14.6 0 3.1.5 6.2 1.2 6.9 1.7 1.7 69.9 1.7 71.6 0 .7-.7 1.2-3.8 1.2-6.9 0-8.9-.1-8.9-26.2-8.9-12 0-21.8-.3-21.8-.6s2.7-3.7 6-7.6c3.3-4 6-7.7 6-8.3 0-3-3.7-4.5-10.6-4.5-6.6 0-7.2.2-10.1 3.2Z"
                  fill="#fff"
                />
              </svg>
              <div>
                {loginSuccess ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "30px",
                    }}
                  >
                    <Redirect to="/dashboard"></Redirect>
                    <LightModeToggle />
                    <Cart />
                    <Logout handleClick={handleLogout} />
                  </div>
                ) : (
                  <Link to="/login">
                    <Login />
                  </Link>
                )}
                {loginSuccess ? null : (
                  <Link to="/">
                    <Register />
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", paddingTop: "50px" }}>
            {loginSuccess ? <Sidebar /> : null}
            <Switch>
              <Route exact path="/">
                <RegisterForm />
              </Route>
              <Route path="/login">
                <LoginForm handleLogin={handleLogin} />
              </Route>
              {loginSuccess ? (
                <>
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/profile" component={Profile} />
                  <Route path="/galaxystore" component={GalaxyStore} />
                  <Route path="/cart" component={CartPage} />
                </>
              ) : (
                <Redirect to="/login" />
              )}
            </Switch>
          </div>
          {/* <CowAbductionSVG /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
