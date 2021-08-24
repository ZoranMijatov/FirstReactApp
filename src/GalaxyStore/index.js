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
            title: "Atom Bomb",
            description: "Text about the product"
        }
    ]
    return (
        <Router>
            <Route exact path="/galaxystore">
                <Hero products={products} />
            </Route>
            <Route>
                <FullCard products={products} path="/galaxystore/:title" />
            </Route>
        </Router>
    )
}

export default GalaxyStore
