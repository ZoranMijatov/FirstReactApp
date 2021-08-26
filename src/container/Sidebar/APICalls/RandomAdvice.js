import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Button from '../../../Button';

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
            <Button isGhost onClick={() => getAdvice()}>New Advice</Button>
        </>
    )
}

export default RandomAdvice

