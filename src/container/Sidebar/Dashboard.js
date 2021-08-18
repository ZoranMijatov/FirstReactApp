import React from 'react'
import RandomAdvice from './APICalls/RandomAdvice';
import Weather from './APICalls/Weather';
import styled from 'styled-components';
import theme from 'styled-theming';
import LightThemeProvider from '../LightThemeProvider';

export const backgroundTheme = theme("theme", {
    light: "linear-gradient(to top, #dfe9f3 0%, white 100%);",
    dark: "linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.70) 200%);",
  });
  
  export const textTheme = theme("theme", {
    light: "#222",
    dark: "#fff",
  });

const FlexItemStyle = styled.div`
width: ${props => props.width};
heigth: ${props => props.height};
border-radius: 7px;
background: ${backgroundTheme};
color: ${textTheme};
box-shadow: -7px 8px 26px -10px rgba(26, 25, 25, 0.7);
    &:first-child {
        padding: 50px 20px 50px;
        text-align: center;
        font-family: 'Montserrat', sans-serif;
    }
`

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