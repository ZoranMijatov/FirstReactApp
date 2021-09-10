import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Hero from './Hero'
import FullCard from './FullCard'

const GalaxyStore = () => {
    return (
            <Router>
                <Route path="/galaxystore">
                    <Hero/>      
                </Route>
                <Route path="/cards/:title">
                    <FullCard/>
                </Route>
            </Router>
    )
}

export default GalaxyStore
