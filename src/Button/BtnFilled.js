import styled from 'styled-components';

const BtnFilled = styled.button`
position: relative;
z-index: 10;
font-family: 'Montserrat', sans-serif;
background: transparent;
border-radius: 7px;
background-image: linear-gradient(to right, #6253e1, #852D91, #A3A1FF, #F24645);
box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
background-size: 300% 100%;
color: white;
border: none;
font-weight: 700;
font-size: 19px;
margin: 0 1em;
padding: 0.25em 1em;
padding: 18px 43px;
box-shadow: 3px 4px 17px -12px rgba(0,0,0,0.75);
transition: all .5s ease-in-out;
    &:hover{
        cursor: pointer;
        box-shadow: 0 0 10px 0 #6253e1 inset, 0 0 20px 2px #6253e1;
    }
`
export default BtnFilled;



