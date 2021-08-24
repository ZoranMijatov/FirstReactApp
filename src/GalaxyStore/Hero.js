import React from 'react'
import Card from './Card'

const Hero = ({ products }) => {
    return (
        <div>
            <Card products={products} />
        </div>
    )
}

export default Hero
