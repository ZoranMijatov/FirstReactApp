import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Hero from './Hero'
import FullCard from './FullCard'
import Cart from './Cart'
import Aircraft from './ItemsSVG/Aircraft.svg'
import Asteroid from './ItemsSVG/Asteroid.svg'
import Earth from './ItemsSVG/Earth.svg'
import Telescope from './ItemsSVG/Telescope.svg'
import Rocket from './ItemsSVG/Rocket.svg'
import styled from 'styled-components'

const AstrounautCartWrapper = styled.div`
    position: relative;
`

const GalaxyStore = () => {

    const products = [
        {
            image: Rocket,
            title: "Satellite",
            description: "Text about the product",
            price: '1,000,000$'
        },
        {
            image: "Link, Link, link, link",
            title: "C4",
            description: "Text about the product",
            price: '1,000,000$'
        },
        {
            image: Aircraft,
            title: "Rocket",
            description: "Text about the product",
            price: '1,000,000$'
        },
        {
            image: "Link, Link, link, link",
            title: "Atom-Bomb",
            description: "Text about the product",
            price: '1,000,000$'
        },
        {
            image: "Link, Link, link, link",
            title: "Alien",
            description: "Text about the product",
            price: '1,000,000$'
        },
        {
            image: "Link, Link, link, link",
            title: "Ufo",
            description: "Text about the product",
            price: '1,000,000$'
        },
        {
            image: Earth,
            title: "Earth",
            description: "Text about the product",
            price: '1,000,000$'
        },
        {
            image: Asteroid,
            title: "Asteroid",
            description: "Text about the product",
            price: '1,000,000$'
        },
        {
            image: Telescope,
            title: "Telescope",
            description: "Text about the product",
            price: '1,000,000$'
        },
        {
            image: "Link, Link, link, link",
            title: "Black-Hole",
            description: "Text about the product",
            price: '1,000,000$'
        }
    ]
    return (
        <AstrounautCartWrapper>
            <Router>
                <Route path="/galaxystore">
                    <Hero products={products} />
                    <Cart />        
                </Route>
                <Route path="/cards/:title">
                    <FullCard products={products}/>
                </Route>
            </Router>
        </AstrounautCartWrapper>
    )
}

export default GalaxyStore
