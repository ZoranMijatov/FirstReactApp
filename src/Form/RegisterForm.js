import React from 'react'
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

const RegisterForm = () => {
    let history = useHistory();

    const strongPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
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
        <div className="Form-Wrapper">
            <form className="Form-Inner" onSubmit={handleLogin}>
                <div className="Form-Group Login">
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
            
                    <input
                    className="Submit"
                    type="submit"
                    value="Submit"
                    disabled = {!strongPass.test(password) || !valEmail.test(email)}
                    />
                </div>
            </form>

            <div class="Astronaut">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" fill="white" width="200" height="300" viewBox="0 0 1752 2520">
                <path d="M999.5 65.1c-41.7 2.3-87.4 10.3-126.5 22-133.7 40.1-246.4 128.5-315.2 247.4-39.4 68-61.7 138.3-70 220.5-1.6 16.5-1.6 73.6 0 90.5 4 40.9 10.8 76.1 22 113 14.1 46.6 38.1 97.4 65.2 138.1 22.9 34.3 44.7 60.6 75.4 90.7l15.1 14.8-3.5 3.1c-1.9 1.7-8.7 7.9-15 13.8-55 51-100.5 84.9-117.7 87.7-2.8.5-3.9.1-6.5-2.3-5.6-5.3-18.3-21.6-38.8-49.9-11.2-15.4-25.6-35-32-43.5-6.4-8.6-12.2-16.5-12.7-17.5-1.2-2.3-4.4-19.9-7.3-41-7.7-55.4-17.8-79.9-36.6-88.6-8.4-3.9-14.1-4.4-25.3-2.5-17.7 3.1-32.5 12.4-41.7 26.3-4.3 6.5-9 19.2-10 27-.5 4-1 5.3-2.3 5.3-2.8-.1-26.7-5.5-47.3-10.8-19.6-5.1-44.5-10-62.8-12.3-14.6-1.9-49.4-1.7-61 .4-29.9 5.5-50.2 18.1-59.8 37.2-6.9 13.9-10.3 28.3-12.7 54.5-.9 9.1-2 19.2-2.5 22.5-1.4 8.8-1.2 25.1.5 34.6 4.1 23.8 16 45.6 35.4 64.9 22.1 22.2 47.3 37.9 85 53.1 16 6.5 25.6 12.4 31.4 19.3 2.1 2.6 8.8 13.7 14.9 24.9 20.2 37 37.4 65.6 58.1 96.7 55 82.5 111.5 138 163.1 160.3 29.3 12.6 69.1 16 102.2 8.8 7.1-1.6 8.4-1.6 10.8-.4 2.3 1.2 2.6 1.9 2.1 4.6-.3 1.8-1.4 8.8-2.6 15.7-1.1 6.9-2.5 17.9-2.9 24.5-.5 6.6-1.4 18.7-2 26.9-1.9 22.8-.8 68.9 1.9 83.6 4.7 25.9 15 48.3 33.3 72.7l3.2 4.3-1.2 23.2c-.7 12.8-1.8 34.3-2.4 47.8-1.7 33.9-1.7 179.3 0 210.5 4.3 82.2 11 140.5 22.4 194.9l3.2 15-2.9 2c-10.4 7.5-24.6 19.6-34 29.1-34.5 34.5-47 67.9-37.1 99 3.7 11.7 8.9 19.8 19.6 30.6 25.4 25.7 70.5 45.7 128 56.8 32 6.2 56.6 8.4 92.5 8.4 46.4 0 80.8-4.5 116.9-15.5 5.4-1.6 10.2-2.6 10.5-2.1 1.4 2.1 18.4 12.5 28.6 17.6 68.6 34 173.6 45.5 261.8 28.6 43.2-8.2 76.9-22.4 100.7-42.5 8.9-7.5 10.1-8.8 16.9-17.8 16.6-22 23.5-52.2 26.2-115.6 2.6-60.6-.8-139-15.1-345.5-4-57.7-8-119.8-8-123.9v-3.4l10.3-.7c47.8-3.1 87-16.3 116.2-39 15-11.7 24.6-23.8 35-44 5.6-11 13.8-31.1 17.8-43.7 1.4-4.2 3.8-9.4 5.4-11.5 12.7-16.1 24-43.1 33-78.8 1.9-7.7 3.8-14.5 4.3-15 .4-.6 2.8-6.2 5.3-12.5 8.3-21.3 11.7-38.7 12.4-64.2.8-26.3-1.6-48.5-7.8-74.1-2-8.2-2.1-9.7-1-22 8.3-97.2 8.8-173.5 1.5-223.7-4.3-29.3-9.4-43.5-22.2-61.4-5.3-7.4-18.1-21.2-26.2-28.1-25.2-21.7-74.2-46.8-121-62-4.7-1.5-8.9-3.1-9.3-3.5-.4-.4.7-1.9 2.6-3.3 1.9-1.4 8.6-7.3 14.9-13l11.4-10.3 9.5 1c17.9 1.8 40.5-1.9 62.1-10.2 5.6-2.2 14.1-5.1 18.8-6.3 18.9-5.1 41.5-19.4 59-37.4 11.2-11.4 10.3-10.4 16.1-18 22.5-29.7 39.1-70.2 44.3-108 3.5-25.8 2.9-44.7-1.9-69-1.3-6.6-2.9-15.4-3.5-19.5-4.7-30.2-17.3-60.3-34.3-81.8l-5-6.4.7-17.1c1.4-35.6-2.7-82.7-10.5-120.7-18-87.9-55.1-165.1-113.3-236.1-19.4-23.7-52-55.8-77.6-76.5-19.9-16-46.7-34.6-65.5-45.4-28.8-16.6-51.6-27.7-78.5-38.3-74.3-29.2-154.7-42.1-234.5-37.6zm76.9 34.5C1223 112 1358 187.1 1446.7 305.5c28.5 38.2 50.7 78.7 67.9 124.3 16.2 42.9 26.4 89.4 29.9 135.9 1.4 18.1 2 44.3 1.1 44.3-.2 0-2.8-1.1-5.7-2.4-21.6-9.5-46.6-13.4-67.4-10.5-4.2.6-7.9.9-8.1.7-.2-.2-.8-5.5-1.4-11.8-2.6-29-7.1-54.7-14.1-81.9-17.9-69.3-53.4-140.9-98.5-198.6-70.9-90.8-161.2-155.1-265.4-189-16.9-5.5-62-17.4-66.4-17.6-2 0-2.1-.1-.1-1 2.6-1.2 35.8-.2 57.9 1.7zm-112.9 20.9c48.4 5.7 99.9 18.7 145.5 36.7 16 6.3 51.1 23.6 66 32.5 40.5 24.2 70.5 47.7 105.6 82.8 36.7 36.6 61.5 68.8 86.9 112.5 37.6 64.6 62.4 144 66 211l.6 11.5-8.7 4c-4.8 2.2-13.5 7.1-19.2 10.8-5.7 3.7-10.5 6.7-10.7 6.5-.1-.2-.7-10.4-1.3-22.8-1.3-26.5-3-40.2-7.9-64-11.2-55.5-33.3-109.9-64.6-159-40.6-63.6-96.2-118.1-159.7-156.7-58.7-35.6-131.9-59.6-204-66.8-20.7-2.1-60.8-2.1-80.3 0-57.8 6.1-111.2 24.7-161.5 56.1-20.1 12.5-48 33.6-62.4 47.1-2.7 2.4-4.8 4.1-4.8 3.6 0-1.4 28.1-29.4 40.7-40.5 41.8-36.9 86.1-64.8 138.6-87.2 17.2-7.4 46.5-17.8 54.8-19.6 7-1.5 64.2-.4 80.4 1.5zm-46 97.5c45.2 2.8 84.6 11.4 128.5 28.3 3 1.2 5.9 2.5 6.4 2.9.6.4 1.6.8 2.3.8.8 0 4.7 1.6 8.9 3.5 4.1 1.9 7.6 3.5 7.9 3.5.7 0 15.5 7.9 27 14.3 7.2 4.1 29.6 18.5 34 21.9 14.1 10.9 26.5 23.4 26.5 26.6 0 1.7 1.7 1.9-25.7-3.7-53.6-10.9-97.1-15.4-150.3-15.5-61.6-.1-111 6.5-158 21.1-65.1 20.2-107.6 49.5-139.2 95.8C661 454 642.9 494.4 625.9 552c-10.3 34.5-17.6 73.8-19.4 104-.4 5.8-.8 10.6-.9 10.8-.4.4-14-27.2-17.2-34.8-3.9-9.4-9.1-25.1-11.9-36-15.4-59.4-4.8-127.6 28.7-185.8 2.6-4.6 4.8-8.6 4.8-8.8 0-.2 2.2-4.1 5-8.5 2.7-4.4 5-8.3 5-8.5 0-1.1 16-24.6 23.4-34.4 21.3-28.3 51.4-59.9 70.6-74 1.8-1.4 4.5-3.5 5.9-4.6 13.2-10.9 43.3-27.9 63.7-35.9 36.9-14.6 82.6-20.6 133.9-17.5zM1270 520.6c18.7 5.3 35 19.5 45 39.3 10.1 20.1 11.2 49.9 2.6 71.2-7 17.4-19.4 32.5-33.1 40.5-33.7 19.7-74.6 5.8-93.1-31.6-22.5-45.5-1-103.9 43.5-118.5 11.3-3.7 23.9-4 35.1-.9zm232.5 109.9c11.9 2.1 23.1 6.6 33.4 13.5 8.5 5.8 19.5 16 15.7 14.6-1-.3-6-1.4-11-2.2-44.3-7.8-93.9 19.8-127.5 71.1-11.8 18-23.4 43.4-29.5 64.7-17.3 60.5-7.8 124 23.8 158.5l7 7.5-3.5-.7c-20.7-4.5-43.6-22.5-56.5-44.5-20.6-35-26.3-78.3-16.8-127.3 8.5-43.9 29.5-84.1 59.8-114.3 32.4-32.3 70.1-47 105.1-40.9zm35.3 56.1c26.4 5.4 46.4 29.3 54.3 64.8 3 13.3 3.7 40.8 1.4 55.8-6.6 44-23.7 80.2-51.5 109.2-26.3 27.4-55.8 39.2-81.4 32.6-11.2-2.8-19-7.3-27.6-16-12.6-12.6-20.9-29.9-24.9-51.5-3.9-21.7-3.6-41 1.3-65.7 12.7-64.6 57.3-119.8 104.6-129.3 8.9-1.8 14.7-1.8 23.8.1zm-282.2 29.8c6.4 3 11.2 7.9 15 15.3 2.5 4.9 3 7.2 3.2 15 .4 8.6.2 9.8-2.6 15.5-10.7 22.8-35.5 24.5-49.4 3.3-3.5-5.3-4.8-10.5-4.8-19.2 0-22.9 20.1-38.5 38.6-29.9zm53 175.1c1.4 4.9 4.3 13.2 6.5 18.2 2.1 5.1 3.9 9.9 3.9 10.7 0 1.9-33.5 35.4-45.5 45.5-105.7 88.4-240.3 123.6-387.6 101.2-35-5.4-89-20.5-118.4-33.3-14.6-6.3-41-24.6-67.5-46.7-13.9-11.6-46.2-43.6-58.8-58.3-8.9-10.3-34.2-43.3-34.2-44.5 0-.8 3 1.9 12.5 10.8 27.2 25.8 62.9 52.2 97 71.8 96.4 55.3 205.5 78.3 309.2 65.1 81.8-10.5 154.8-41.6 217.3-92.7 12.6-10.3 40.2-38 52-52.1l9.5-11.3.8 3.3c.4 1.8 1.9 7.3 3.3 12.3zm-925.7 11.7c3.9 8 8 25.1 13.2 55.3 7.1 41.4 12.2 57.9 21.1 68 2 2.3 5.1 4.8 6.8 5.5 3.3 1.3 7.4 6.6 32.5 41.5 20.5 28.4 29.7 40.3 38 49.3l6.7 7.2 1.4 9.3c6.3 43.2 7.1 96.3 1.8 134.2-6.9 49.7-25.2 95.4-48.2 120.5-2.3 2.5-4.2 4.8-4.2 5.1 0 .4-3.6 3.9-8 7.9l-7.9 7.2-9.8-7.9c-12.7-10.1-39.2-36.5-51.9-51.8-39.5-47.3-75.7-102.3-113.3-172.8-13.5-25.2-26.8-36.5-57.5-48.6-25.6-10.2-50.9-24.7-66.7-38.3-25.9-22.4-38.3-50.8-34.1-78.3.6-3.9 1.8-14.7 2.7-24 3.7-39 9.1-50.3 27.7-57.5 12.1-4.7 23.1-6.4 42.3-6.3 26 0 54.8 4.5 89.5 13.8 9.1 2.4 22.1 5.6 29 7 6.8 1.4 12.5 2.7 12.6 2.8.2.1-1.5 2.8-3.6 5.9-5.9 8.8-8.5 17.5-8.5 28.6 0 9 .1 9.5 2.8 11.8 3.7 3.1 8.6 3.2 11.4.1 1.1-1.2 3.2-4.5 4.8-7.2 4-7 13.3-16.4 20.2-20.4 16.8-9.9 17.2-10.6 17.3-29.6 0-15 1.7-24.4 5.7-31.6 3.1-5.8 6.6-8.6 13.8-11.1 8.3-2.9 9-2.6 12.4 4.4zm978.1 67c4.1 3 8.9 6.2 10.7 7.1 4.7 2.5 4.8 3.3.5 7.1-27.7 25.1-69.8 52.7-109.7 72.2-54.9 26.7-110 42.7-172 50-29.9 3.5-91.6 2.9-118.5-1.1l-8.5-1.2 16-.2c103.8-.9 206.8-34.7 288.1-94.6 19.3-14.3 33.8-26.8 51.9-44.9l17-17.1 8.5 8.6c4.7 4.7 11.9 11.1 16 14.1zm-658.8 61.6c48.1 36.7 108.8 67.8 168 86.1 99.7 30.8 204.4 33.1 306 6.6 41.6-10.8 91.2-30.8 126.7-50.9 3.5-2 6.5-3.5 6.6-3.4 1.8 2.7 31.9 39.9 37.8 46.8 7.4 8.6 43.3 53.5 55.2 69 45.3 59 82.1 120 105.6 174.6 5.1 12 13.9 35.6 13.9 37.3 0 .6-5.1-1.7-11.3-4.9-28.1-14.8-63.3-27-94.7-32.9-42.9-8.1-86.3-7.1-123.2 2.8l-10.4 2.8-1.1-5.6c-2.4-12.6-10.5-27.8-20.8-38.9-6.8-7.4-17.6-15.2-20.8-15.2-2.6 0-5.7 2.8-5.7 5 0 .9 2.4 8.4 5.4 16.7 6.2 16.9 9.6 31.9 9.6 42 0 5.8-.5 8-3 12.9-1.6 3.2-4.5 7.6-6.4 9.8l-3.4 3.9-22.1-8.7c-42.1-16.4-55-19.1-76.6-16.2-15.1 2-29.5 5.3-42 9.5-4.9 1.7-9.4 3.1-10 3.1-.6 0-2.4-3.5-4-7.7-7.7-20.2-23.5-36.9-43.7-46.2-10.3-4.8-14-5.6-56.8-13.1-56.5-9.8-138.8-24.3-199.5-35-89.2-15.8-90.6-16-98.5-16-9.1 0-18.4 1.5-25.9 4-3.1 1-5.7 1.7-5.9 1.5-.2-.2 1.9-10.6 4.7-23.2 9.9-45.3 15.5-77.6 18.3-105.6 1.2-12.6 1.2-12.8-1-14.9-1.8-1.8-2.6-2-4.9-1.2-3.3 1.1-4.7 3.8-15.7 29.4-16.4 38.2-30.7 84.1-45.1 144.5-2.6 11-5.5 22.7-6.4 25.9l-1.6 5.9-8.9 1.8c-15 3-29.8 11.5-40.5 23.2-4.5 4.9-11.5 16.2-14.1 22.6-6.9 17.7-6.4 40.7 1.5 57.9 2.1 4.5 2.2 5.4.9 5.9-.8.3-9.7.3-19.7 0-16.1-.4-19.5-.8-29.8-3.5-6.3-1.7-15.7-5-20.7-7.3l-9.3-4.2 7.9-8.1c19.6-20.4 31.4-38.5 43.1-66.6 21.1-50.4 28.4-120.3 20.5-196.1-.9-8.5-1.6-15.8-1.7-16.3-.1-.6 2.2-1.3 5.1-1.8 18.9-2.9 51.3-23 91.2-56.7 24.5-20.7 63.8-56 64.8-58.4.7-1.5 2.3-.5 12.4 7.1zm674.3 20.4c57.3 18 100.9 41 126.7 67 21.4 21.5 27.3 40 30.9 96.8 1.2 18.6.7 96.8-.7 111.2l-.7 6.8-10.6-21.3c-21.2-42.2-45.7-82-83-134.7-7.9-11.3-16.6-23.4-19.3-27-4.8-6.3-4.9-6.5-2.6-7.2 3.2-.9 31.8-3.7 45.8-4.3 6.3-.3 14-.9 17-1.2 5.3-.6 5.4-.7 2-1.3-19.5-3.9-54.7-8.9-74.1-10.5l-7.7-.7-11.3-14.1c-13.2-16.3-25.9-30.7-41.1-46.3-6-6.1-10.8-11.4-10.8-11.7 0-.4 2.9-2.6 6.6-5.1l6.5-4.3 5.2 1.4c2.9.8 12.4 3.7 21.2 6.5zm-672.7 246.7c8.9 1.5 16.6 3.1 16.9 3.5.4.3-.8 9.1-2.6 19.4-20 114.8-19.3 110.3-18.1 117.4 1.7 10.9 5.6 17.2 17.2 27.9 26.5 24.3 25.5 23.2 26.4 27.6.3 1.7-.3 8.9-1.4 16-1.1 7-4.1 26.3-6.6 42.8-5.7 37.1-5.1 34.5-7.9 34.5-1.2 0-23.4-3.8-49.4-8.4-52.4-9.3-52.6-9.4-62.5-19-9.9-9.5-15.2-20-17-33.6-1-6.9-.7-9.6 3.6-35 12.9-75.4 26.7-152.2 28.6-158.1 4.9-16 19.2-30.1 35.5-35.2 10.8-3.4 17.2-3.4 37.3.2zm141.9 25.1c81.6 14.4 97.1 17.4 101.5 19.6 3 1.5 8.4 5.8 12.3 9.8 8.6 8.7 13 17.2 15.2 29.2 1.7 9.4 1.4 12.8-4.2 42.4-1.3 6.9-7.6 42.2-14 78.5s-12.2 68.6-13 71.9c-5.9 23.4-28 40.6-52 40.6-3.7 0-14.5-1.3-23.9-3-66-11.5-111.7-19.8-112.1-20.1-.2-.3 1.6-13.8 4-30 9.7-63.3 9.9-64.8 8.6-71.8-2.3-12.4-5.3-16.4-25.3-34.4-8.4-7.5-15.8-14.5-16.4-15.5-2.5-4-2.4-8.2.5-24.8 1.6-9.3 6.4-36.7 10.5-60.9 9.4-54.4 8.4-49.4 10.4-48.9.9.3 45 8.1 97.9 17.4zm163.9 29c14 2.8 23.1 7.4 31.5 15.9 7.4 7.6 13.5 18.5 14.5 26.2.6 4.4.5 4.4-5 8.7-13.1 10.1-22.1 24-26.9 41.7-1.4 5.3-3.8 11-5.7 13.9-8.2 12.1-12.7 30.1-11.6 46 .8 10.6 2.9 21.8 5.5 30.1 1.5 4.6 2.1 10.2 2.5 24 .5 16.5 2.9 43.6 4.1 45.5.7 1.2-4.7 8.1-10.1 12.9-13.7 12-29.7 16.2-48.9 12.7-16.7-3.1-15.7-1.6-6.7-11 8.7-9.1 14.7-18.9 18.5-30.6 1.4-4.1 5.5-24.6 9.2-45.5 3.6-20.9 10.7-61.2 15.7-89.5 8.4-46.9 9.2-52.6 9.1-63.5-.1-13-2.1-23.1-6.8-33.3-1.4-3-2.5-5.6-2.5-5.8 0-.8 4.1-.3 13.6 1.6zm-414.6 6.5c0 1.2-14.6 82.4-15.5 86.3-.7 3.1-1.4 2.8-8.3-4-6-5.8-10.9-14.4-13.2-22.7-2.6-9.6-.7-25.9 4.1-35.2 2.4-4.8 12-15.2 16.6-18 3.5-2.2 14-6.8 15.6-6.9.4 0 .7.2.7.5zm786.7 20.6c36.6 3.1 75.1 13.9 109.8 30.9 15.8 7.7 34.9 19.5 39.2 24.2 6 6.4 9.2 54.1 5.3 77.8-4.6 27.4-15.6 52.3-33.6 76-40.4 53.2-118 96.5-199.4 111.1-9.7 1.8-16.4 2.3-30 2.3-20.1.1-24.5-.9-38-9.1-12.5-7.6-17.4-12-41.9-38.1-14.7-15.8-22.8-22.2-31-24.6-11.2-3.3-20.4-1.4-41.1 8.3-19.2 9.1-23 10.4-32.2 10.4-6.6.1-8.5-.3-14.2-3.2-3.7-1.8-7.7-4.7-9.1-6.5-6.9-9.1-13.1-30.1-16.2-55.6-2.5-20.2-2.5-68.8 0-91.5 2.1-18.6 5.8-38 8.7-45.9 6.5-17.4 34.3-33.1 71.5-40.5 17.9-3.6 22.9-3.7 34.6-.7 14 3.5 33.7 11 52.2 19.7 18.1 8.7 21.5 11 32.9 22.6 13.8 13.9 23 27.5 28.3 41.8 1.4 3.9 3.5 7.8 4.7 8.7 3 2.6 8 2.3 10.8-.7 2-2.2 2.2-3.1 1.7-9.2-1.1-14.6-10.7-38.5-22.3-55.7-3.2-4.8-6.5-9.8-7.3-11-1.3-2-1-2.7 4.3-9.5 3.1-4.1 6.9-10 8.4-13.3l2.7-5.8 9-2.9c29.2-9.4 59.8-12.7 92.2-10zm-776.9 210.8c15 10.2 21.3 12.1 64.7 19.6 17.6 3.1 35.6 6.2 40 7 57.1 10.3 252.5 44.5 257.2 45 7.9.9 22.8-1 31.8-4 7.9-2.7 20.1-9.1 25.8-13.6 2.1-1.7 4-2.9 4.1-2.8.2.2 2 3.8 4.2 7.9 10.2 19.8 32.5 33 55.8 33 14.4 0 23.8-2.8 46.7-13.6 7.5-3.5 14.8-6.4 16.2-6.4 2.9 0 6.6 3.4 27.5 25.7 22.2 23.6 37.4 34.8 57.3 42.2 13.2 4.9 31.9 7 47.7 5.4 4.5-.5 8.6-.7 9-.4.5.4 1 3.3 1.1 6.6.9 25.8 6.8 119.5 13.6 218 1.9 27.5 3.5 51.6 3.5 53.6 0 3.6 0 3.6-7.2 5.8-29.5 9.1-50.6 14.5-76.3 19.5-90 17.6-172 16.4-239.8-3.4-20.3-5.9-20.4-6-21-11.2-.3-2.3-1-30-1.6-61.3-2.6-136.2-3.2-159-4.6-175.5-2.2-26.2-3.5-36.3-5.1-38.8-1.8-2.7-6.4-3-8.6-.5-2.1 2.5-7.3 24.4-10.5 45.1l-2.8 17.3-11-.6c-43.4-2.3-69.4-6.2-96.9-14.4-7.2-2.1-20.3-6-29.1-8.6-57-16.8-118.4-52.6-153.8-89.5-24.7-25.8-37.7-49.4-42.1-76.8-1.7-10.6-3.2-34.2-2.2-34.2.4 0 3.3 1.7 6.4 3.9zm858.1 113.2c-11.3 22.6-28.6 38.4-53.7 49.4-20.3 8.8-48.5 14.9-72.6 15.6-8.6.3-8.1 1.5-9.1-22.4l-.7-17.4 3.8-.7c13.1-2.4 49.7-14.6 67.2-22.3l12.7-5.6 22-.2c15.7-.2 23.6-.7 27.5-1.7 3-.8 5.6-1.4 5.8-1.3.2.2-1.1 3.2-2.9 6.6zm-807.6 49.4c37 27.9 89.9 54.2 135.7 67.3 9.6 2.8 23.8 6.9 31.5 9.2 7.7 2.3 18.9 5.1 24.8 6.1 23.2 4 61.1 7.9 77.7 7.9 3.4 0 5.9.4 5.6.8-.2.4-1 15.8-1.6 34.2-1 31.8-.2 87.7 1.6 108.6l.6 7.2-14.8 3.5c-98.5 23.6-200.6 23.2-272.3-1.1-7.5-2.5-8.6-3.2-9.3-5.7-.4-1.6-1.3-25.8-2-53.9-1.2-53.6-.2-130.6 2.4-177.3l1.1-21.2 2.2 1.7c1.2.9 8.8 6.7 16.8 12.7zm279 291.2c5 67.2 13 125.9 23.8 174.7l3.1 14-2.8 2c-10.4 7.5-24.5 19.6-34 29.1-26.9 26.9-40.4 52.9-40.4 78 0 10.4 2.4 21.5 6.5 29.5 1.4 2.9 2.5 5.3 2.3 5.5-.7.8-21.1 5.5-30.1 7-30.4 5-70.8 6.8-102.9 4.6-54-3.9-104-16.8-138.4-35.8-24.2-13.5-37.2-27.8-39-43.3-1.2-10.4 4.4-25.6 14.6-39.6 9.8-13.5 32.6-34.7 49.8-46.3 7.2-4.9 20.6-10 37.1-14.1 23.8-5.9 29.2-6.5 59.6-6.4 25.8 0 29.1.2 42.5 2.6 22.1 4.1 47.1 11.8 62.1 19.3 7.8 3.9 4 .6-7.1-6.1-39.9-24.2-88-37.4-136.3-37.4-14.6 0-43.7 2.3-45.8 3.6-.9.5-1.2-.5-3.8-12.9-6.7-31.2-14-85.9-17.1-127.2-.6-7.7-1.3-16.2-1.6-18.9-.5-4.7-.4-4.8 1.8-4.3 1.3.3 10.2 2.5 19.8 5 42 10.9 75.2 14.4 127 13.4 32.3-.6 53.8-2.4 84.5-7.2 16.2-2.5 59.5-11.2 60.4-12.1 2.1-2.1 2.8 1.5 4.4 23.3zm379.1 5.5c.7 7.6 3.1 46.7 5.2 86.8 2.1 40.3 3 127.1 1.5 151.4-4.4 72-14.9 92-59.6 113.2-36.1 17.1-85.3 25.3-144 24.1-61.1-1.3-115.4-13-154.2-33.1-29-15.2-43.9-30.8-45.1-47.7-1.4-19.6 15.3-45.2 45.8-70.6 20.3-16.8 28.4-21.1 51.4-27.3 24.4-6.5 32.5-7.5 62.6-7.5 22.2 0 29.6.4 38.5 1.8 22.4 3.8 47.2 11 64.1 18.7 3.7 1.6 7 3 7.3 3 .3 0-2.8-2.2-6.9-4.8-29.6-18.9-64-31.5-102.5-37.7-15.7-2.6-50.8-3.1-68.4-1.1-7.9 1-14.9 1.8-15.4 1.9-1.1.2-1.3-.5-5.7-21.8-3.8-18.4-9.2-50.9-11.9-71-3.9-28.7-7.8-70.1-6.9-71.1.3-.3 5.7 1 12 3 24.3 7.3 52.5 12.4 84.8 15.2 23.2 2 75.3 1.5 99-1 46.5-5 99-15.4 135.5-26.9 6.1-1.9 11.3-3.5 11.7-3.6.3 0 .9 2.7 1.2 6.1z"/>
                <path d="M849.7 1403.1c-2.1.5-6.3 2-9.2 3.5-25.7 12.1-41.8 43.8-38.5 76 1.7 16.5 8.7 31.1 19.8 41.5 7.6 7.1 15.6 11.2 25.2 12.7 3.6.6 13 2.3 21 3.6 27.6 4.9 38.4 3 54.4-9.6 10.2-8 17.9-19.9 23.2-35.8 2.5-7.7 2.8-9.9 2.8-23 .1-12.5-.2-15.5-2.2-22-6.2-19.9-17.4-33.1-33-39-6.6-2.5-45.7-9-53.5-8.9-3.4.1-7.9.5-10 1zm22.8 21.7c5.4 2.7 13.1 11.1 15.6 16.9 3 7 4.9 17 4.3 23.3-.4 5-.9 5.9-5.2 10.1-18.7 18.1-43.4 16.7-58.9-3.3-5.4-7-5.8-9.7-2.9-18.3 4.7-13.7 14.6-25.4 25-29.5 6.5-2.6 16.3-2.2 22.1.8z"/>
                </svg>
            </div>
        </div>
    )
}

export default RegisterForm;
