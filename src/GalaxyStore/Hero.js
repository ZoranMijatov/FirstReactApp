import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const HeroFlex = styled.div`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
`

const Hero = () => {
    return (
        <HeroFlex>
            <Card />
        </HeroFlex>
    )
}

export default Hero
