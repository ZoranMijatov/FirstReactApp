import React, { useState } from 'react'
import axios from 'axios';
import Button from '../../../Button';

const Weather = () => {
    const [temperature, setTemperature] = useState('');
    const [city, setCity] = useState('');

    const getWeather = (city) => {
        axios({
            method: 'GET',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=628f99f67cda15c0c3996777021e6c9c`
        })
        .then((response) => {
            setTemperature(response.data.main.temp - 273.15);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="Weather-Wrapper">
            <h1>{Math.round(temperature * 100) / 100} °C</h1>

            <input 
            type="text"
            value= {city}
            onChange={(e) => setCity(e.target.value)}    
            />

            <Button type="BtnEmpty" onClick={() => getWeather(city)}>Get Weather</Button>
        </div>
    )
}

export default Weather

