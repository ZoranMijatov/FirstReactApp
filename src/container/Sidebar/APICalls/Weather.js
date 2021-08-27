import React, { useState } from 'react'
import axios from 'axios';
import Button from '../../../Button';
import { WeatherWrapper } from './Styles';
import { Input } from '../../../Form/Styles';

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
        <WeatherWrapper>
            <h1>{Math.round(temperature * 100) / 100} °C</h1>

            <Input 
            WeatherInput
            type="text"
            value= {city}
            onChange={(e) => setCity(e.target.value)}    
            />

            <Button onClick={() => getWeather(city)}>Get Weather</Button>
        </WeatherWrapper>
    )
}

export default Weather

