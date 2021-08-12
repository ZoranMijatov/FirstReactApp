import React from 'react'
import RandomAdvice from './APICalls/RandomAdvice';
import Weather from './APICalls/Weather';
import styled from 'styled-components';

const FlexItem2Style = styled.div`
width: 500px;
heigth: 250px;
color: white;
    &:first-child {
        padding: 50px 20px;
        text-align: center;
        font-family: 'Montserrat', sans-serif;
    }
`

const Dashboard = () => {
    return (
        <div className = "Flex-Wrapper">
            <div className="Flex-Item Flex-Item1">
                <Weather />    
            </div>
            <div className="Flex-Item Flex-Item2">
                <FlexItem2Style><RandomAdvice/></FlexItem2Style>
            </div>

            <div className="Flex-Item Flex-Item3">
                <h1>Yes</h1>
            </div>

            <div className="Flex-Item Flex-Item4">
                <h1>Yes</h1>
            </div>

            <div className="Flex-Item Flex-Item5">
                <h1>Yes</h1>
            </div>

            <div className="Flex-Item Flex-Item6">
                <h1>Yes</h1>
            </div>

        </div>
    )
}

export default Dashboard;