import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormWrapper, FormGroup, Input } from "./Styles";

const RegisterForm = () => {
  let history = useHistory();

  const strongPass = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  const valEmail = new RegExp(/\S+@\S+\.\S+/);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    password: false,
    email: false,
  });
  const [age, setAge] = useState("");
  const [pwdReveal, setPwdReveal] = useState(false);

  const goodPass = strongPass.test(errors);
  const goodEmail = valEmail.test(errors);

  localStorage.setItem("username", email);
  localStorage.setItem("pwd", password);
  localStorage.setItem("DoB", age);

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    history.push("/login");
    console.log(email, password);
    if (!goodPass || !goodEmail) {
      setErrors(true);
      return;
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <FormWrapper>
      <form className="Animate" onSubmit={handleLogin}>
        <FormGroup>
          <h2>Welcome, please register below</h2>

          <label htmlFor="name">Email:</label>

          <Input
            type="text"
            value={email}
            onChange={handleEmailChange}
            style={!valEmail.test(email) ? { border: "0.5px solid red" } : {}}
          />

          {!valEmail.test(email) && (
            <p style={{ color: "red" }}>Invalid Email</p>
          )}

          <label htmlFor="password">Password:</label>

          <div className="PasswordWrapper">
            <Input
              type={pwdReveal ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              style={
                !strongPass.test(password) ? { border: "0.5px solid red" } : {}
              }
            />
            <svg
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

          {!strongPass.test(password) && (
            <p style={{ color: "red" }}>Invalid Password</p>
          )}

          <label htmlFor="age">Date of birth:</label>
          <Input type="age" value={age} onChange={handleAgeChange} required />

          <Input
            Submit
            type="submit"
            value="Submit"
            disabled={!strongPass.test(password) || !valEmail.test(email)}
          />
        </FormGroup>
      </form>

      <div className="Astronaut" />
    </FormWrapper>
  );
};

export default RegisterForm;
