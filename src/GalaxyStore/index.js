import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Hero from './Hero'
import FullCard from './FullCard'

const GalaxyStore = () => {

    const products = [
        {
            image: "Link",
            title: "Satellite",
            description: "Text about the product"
        },
        {
            image: "Link",
            title: "C4",
            description: "Text about the product"
        },
        {
            image: "Link",
            title: "Rocket",
            description: "Text about the product"
        },
        {
            image: "Link",
            title: "Atom-Bomb",
            description: "Text about the product"
        },
        {
            image: "Link",
            title: "Alien",
            description: "Text about the product"
        },
        {
            image: "Link",
            title: "Ufo",
            description: "Text about the product"
        },
        {
            image: "Link",
            title: "Laser",
            description: "Text about the product"
        },
        {
            image: "Link",
            title: "Asteroid",
            description: "Text about the product"
        },
    ]
    return (
        <Router>
            <Route path="/galaxystore">
                <Hero products={products} />
            </Route>
            <Route path="/cards/:title">
                <FullCard products={products}/>
            </Route>
        </Router>
    )
}

export default GalaxyStore
