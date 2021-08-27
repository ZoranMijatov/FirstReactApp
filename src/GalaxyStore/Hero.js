import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const HeroFlex = styled.div`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
`

const Hero = ({ products }) => {
    return (
        <HeroFlex>
            <Card products={products} />
        </HeroFlex>
    )
}

export default Hero
