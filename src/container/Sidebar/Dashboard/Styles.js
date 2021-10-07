import styled from "styled-components"
import theme from "styled-theming";

const backgroundTheme = theme("theme", {
    light: "rgba(255, 255, 255, 0.1);",
    dark: "rgba(0, 0, 0, 0.2);",
  });
  
const textTheme = theme("theme", {
    light: "#111",
    dark: "#fff",
  });

const shadowTheme = theme("theme", {
  light: "20px 20px 50px rgba(0, 0, 0, 0.3)",
  dark: "20px 20px 50px rgba(255, 255, 255, 0.3)",
});

const borderTheme = theme("theme", {
  light: "1px solid rgba(255, 255, 255, 0.5)",
  dark: "1px solid rgba(0, 0, 0, 0.5)",
});

export const FlexItemStyle = styled.div`
width: ${props => props.width};
height: ${props => props.height};
border-radius: 7px;
background: ${backgroundTheme};
color: #fff;
box-shadow: ${shadowTheme};
border-left: ${borderTheme};
border-top: ${borderTheme};
    &:first-child {
        padding: ${props => props.isApod ? "0 0 20px" : "50px 20px 50px"};
        text-align: center;
        font-family: 'Montserrat', sans-serif;
    }
`
