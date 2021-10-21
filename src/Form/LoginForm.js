import React from "react";
import { useState } from "react";
import { FormWrapper, FormGroup, Input } from "./Styles";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwdReveal, setPwdReveal] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    props.handleLogin(email, password);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <FormWrapper>
      <div>
        <form onSubmit={handleLogin}>
          <FormGroup>
            <h2>Welcome back, please login</h2>
            <label htmlFor="name">Email:</label>
            <Input
              className="Input-Fields"
              type="text"
              value={email}
              onChange={handleEmailChange}
            />

            <label htmlFor="password">Password:</label>

            <div className="PasswordWrapper">
              <Input
                className="Input-Fields Input-Password"
                type={pwdReveal ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
              />
              <svg
                style={{ right: "15px" }}
                width="24"
                height="24"
                onClick={() => setPwdReveal(!pwdReveal)}
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 7C9.934 7 4.798 10.776 3 16c1.798 5.224 6.934 9 13 9s11.202-3.776 13-9c-1.798-5.224-6.934-9-13-9z"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <circle
                  cx="16"
                  cy="16"
                  fill="none"
                  r="5"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  stroke={pwdReveal ? null : "#fff"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="m3 3 26 26"
                />
              </svg>
            </div>

            <Input type="submit" Submit value="Login" />
          </FormGroup>
        </form>
      </div>

      <div className="AstronautLogin"></div>
    </FormWrapper>
  );
};

export default LoginForm;
