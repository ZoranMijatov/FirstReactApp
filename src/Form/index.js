import React from 'react'
import {getLoginData} from '../services/authService'
import {useState} from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleLogin = (e) => {
        e.preventDefault()
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
                <input className="Input-Fields" type="text" value={email} onChange={handleEmailChange}  />                
                
                <label htmlFor="password">Password:</label>
                <input className="Input-Fields" type="password" value={password} onChange={handlePasswordChange} />

                <input className="Submit" type="submit" value="Login" />
            </div>
            
        </form>
    )
}

export default LoginForm;
