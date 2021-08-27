import React from 'react'
import {useState} from 'react';
import { FormWrapper, FormGroup } from './Styles';
import { Input } from './Styles';

const LoginForm = (props) => {
    const strongPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
    const valEmail = new RegExp(/\S+@\S+\.\S+/);
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        props.handleLogin(email, password);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    return (
        <FormWrapper>
            <form onSubmit={handleLogin}>
                <FormGroup>
                    <h2>Welcome back, please login</h2>
                    <label htmlFor="name">Email:</label>
                    <Input className="Input-Fields"
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                    style = {!valEmail.test(email) ? {border: '0.5px solid red'} : {}}
                    />
            
                    {!valEmail.test(email) && <p style={{color: 'red'}}>Invalid Email</p>}
            
                    <label htmlFor="password">Password:</label>
            
                    <Input
                    className="Input-Fields Input-Password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    style = {!strongPass.test(password) ? {border: '0.5px solid red'} : {}}
                    />
            
                    {!strongPass.test(password) && <p style={{color: 'red'}}>Invalid Password</p>}
            
                    <Input
                    type="submit"
                    Submit
                    value="Login"
                    disabled = {!strongPass.test(password) || !valEmail.test(email)}
                    />
                </FormGroup>
            </form>

            <div className="AstronautLogin">
            </div>
        </FormWrapper>
    )
}

export default LoginForm;
