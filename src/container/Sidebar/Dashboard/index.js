import React from 'react'
import RandomAdvice from '../APICalls/RandomAdvice';
import Weather from '../APICalls/Weather';
import LightThemeProvider from '../../LightThemeProvider';
import { FlexItemStyle } from './Styles';

const Dashboard = () => {
    return (
            <LightThemeProvider>

                <div className = "Flex-Wrapper">
                    <div>
                        <FlexItemStyle><Weather /></FlexItemStyle>   
                    </div>
                    <div className="Flex-Item Flex-Item2">
                        <FlexItemStyle width="500px"><RandomAdvice/></FlexItemStyle>
                    </div>

                    <div className="Flex-Item Flex-Item3">
                        <FlexItemStyle>
                            <h1>Content</h1>
                        </FlexItemStyle>Content
                    </div>

                    <div className="Flex-Item Flex-Item4">
                        <FlexItemStyle>
                            <h1>Content</h1>
                        </FlexItemStyle>
                    </div>

                    <div className="Flex-Item Flex-Item5">
                        <FlexItemStyle>
                            <h1>Content</h1>
                        </FlexItemStyle>
                    </div>

                    <div className="Flex-Item Flex-Item6">
                        <FlexItemStyle>
                            <h1>Content</h1>
                        </FlexItemStyle>
                    </div>

                </div>

            </LightThemeProvider>
    )
}

export default Dashboard;