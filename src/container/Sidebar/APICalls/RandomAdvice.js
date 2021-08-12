import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Button from '../../../Button';
import BtnEmpty from '../../../Button/BtnEmpty';

const RandomAdvice = () => {
    const [advice, setAdvice] = useState('')

    useEffect(() => {
        getAdvice()
      }, []);

    const getAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            setAdvice(response.data.slip.advice)
        })
        .catch((error) => {
            console.log(error)
        })
    }
  
    return (
        <>
            <h2>{advice}</h2>
            <Button type="BtnEmpty">New Advice</Button>
        </>
    )
}

export default RandomAdvice

