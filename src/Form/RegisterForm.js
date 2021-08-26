import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormWrapper, FormGroup } from './Styles';

const RegisterForm = () => {
    let history = useHistory();

    const strongPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
    const valEmail = new RegExp(/\S+@\S+\.\S+/);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({
        password: false,
        email: false
    })

    const goodPass = strongPass.test(errors)
    const goodEmail = strongPass.test(errors)

    localStorage.setItem('username', email);
    localStorage.setItem('pwd', password);

    const handleLogin = (e) => {
        e.preventDefault();
        history.push("/login");
        console.log(email, password);
        if (!goodPass || !goodEmail) {
            setErrors(true);
            return;
        }
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
                    <h2>Welcome, please register below</h2>
                    
                    <label htmlFor="name">Email:</label>
                    
                    <input className="Input-Fields"
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                    style = {!valEmail.test(email) ? {border: '0.5px solid red'} : {}}
                    />
            
                    {!valEmail.test(email) && <p style={{color: 'red'}}>Invalid Email</p>}
            
                    <label htmlFor="password">Password:</label>
            
                    <input
                    className="Input-Fields Input-Password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    style = {!strongPass.test(password) ? {border: '0.5px solid red'} : {}}
                    />
            
                    {!strongPass.test(password) && <p style={{color: 'red'}}>Invalid Password</p>}
            
                    <label htmlFor="age">Date of birth:</label>
                    <input 
                    className="Input-Fields"
                    type="age" 
                    />
                    
                    <input
                    className="Submit"
                    type="submit"
                    value="Submit"
                    disabled = {!strongPass.test(password) || !valEmail.test(email)}
                    />

                </FormGroup>
            </form>

            <div className="Astronaut" />
        </FormWrapper>
    )
}

export default RegisterForm;
