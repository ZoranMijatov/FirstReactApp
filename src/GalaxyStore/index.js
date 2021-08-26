import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Hero from './Hero'
import FullCard from './FullCard'
import Cart from './Cart'

const GalaxyStore = () => {

    const products = [
        {
            image: "Link, Link, link, link",
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
            image: "Link, Link, link, link",
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
            image: "Link, Link, link, link",
            title: "Laser",
            description: "Text about the product",
            price: '1,000,000$'
        },
        {
            image: "LinkLink, Link, link, link",
            title: "Asteroid",
            description: "Text about the product",
            price: '1,000,000$'
        },
        {
            image: "Link, Link, link, link",
            title: "Supernova",
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
        <Router>
            <Route path="/galaxystore">
                <Hero products={products} />
                <Cart />
            </Route>
            <Route path="/cards/:title">
                <FullCard products={products}/>
            </Route>
        </Router>
    )
}

export default GalaxyStore
