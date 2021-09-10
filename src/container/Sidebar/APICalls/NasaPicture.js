import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { ParagraphStyle, HeadingTwoStyle, NasaFlexWrapper } from "./Styles"

const NasaPicture = () => {

    const [state, setState] = useState({
        apod: null,
        apodInfo: '',
        apodTitle: ''
    })

    useEffect (() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
        .then
        ((response) => {
            setState({
                apod:(response.data.hdurl), 
                apodInfo:(response.data.explanation), 
                apodTitle:(response.data.title)})
        })
        .catch((error) => {
            console.log(error)
        })
    }, []);

    return (
        <>
            <img src={state.apod} alt="" height="500px" width="400px"/>
            <NasaFlexWrapper>
                <ParagraphStyle>NASA PICTURE OF THE DAY</ParagraphStyle>
                <HeadingTwoStyle>{state.apodTitle}</HeadingTwoStyle>
                {/* <p width="100px">{apodInfo}</p> */}
            </NasaFlexWrapper>
        </>
    )
}

export default NasaPicture
