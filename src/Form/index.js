import React from 'react'
import {getLoginData} from '../services/authService'
import {useState} from 'react';

const LoginForm = () => {
    const strongPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    const valEmail = new RegExp(/\S+@\S+\.\S+/);
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const invalidPwd = 'Invalid Password';

    const handleLogin = (e) => {
        console.log(email, password);
        getLoginData(email, password).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
        
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    return (
        <form className="Form-Inner" onSubmit={handleLogin}>
    
            <div className="Form-Group">
                <h2>Welcome back, please login</h2>
                <label htmlFor="name">Email:</label>
                <input className="Input-Fields" type="text" value={email} onChange={handleEmailChange}  
                style = {!valEmail.test(email) ? {border: '0.5px solid red'} : {}}
                />                
                {!valEmail.test(email) && <p style={{color: 'red'}}>Invalid Email</p>}
                
                <label htmlFor="password">Password:</label>
                <input className="Input-Fields Input-Password" type="password" value={password} onChange={handlePasswordChange} 
                style = {!strongPass.test(password) ? {border: '0.5px solid red'} : {}}
                />
                {!strongPass.test(password) && <p style={{color: 'red'}}>Invalid Password</p>}
                <input className="Submit" type="submit" value="Login" disabled = {!strongPass.test(password) && !valEmail.test(email)} />

            </div>
            
        </form>
    )
}

export default LoginForm;
