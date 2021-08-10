import React from 'react'
import RandomAdvice from './APICalls/RandomAdvice';

const Dashboard = () => {
    return (
        <div className = "Flex-Wrapper">
            <div className="Flex-Item">
                <h1>Yes</h1>         
            </div>
            <div className="Flex-Item">
                <h1>Yes</h1>
            </div>

            <div className="Flex-Item">
                <RandomAdvice />
            </div>

            <div className="Flex-Item">
                <h1>Yes</h1>
            </div>

            <div className="Flex-Item">
                <h1>Yes</h1>
            </div>

            <div className="Flex-Item">
                <h1>Yes</h1>
            </div>

        </div>
    )
}

export default Dashboard;