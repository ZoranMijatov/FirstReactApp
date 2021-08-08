import styled from 'styled-components';

const BtnFilled = styled.button`
font-family: 'Montserrat', sans-serif;
background: transparent;
border-radius: 10px;
background-image: linear-gradient(to right, #6253e1, #852D91, #6B8DD6, #8E37D7);
box-shadow: 6px 3px 23px -2px rgba(0,0,0,0.25);
background-size: 300% 100%;
color: white;
border: none;
font-weight: 700;
font-size: 16px;
margin: 0 1em;
padding: 0.25em 1em;
padding: 16px 43px;
box-shadow: 3px 4px 17px -12px rgba(0,0,0,0.75);
    &:hover{
        cursor: pointer;
        background-position: 100% 0;
        transition: all .4s ease-in-out;
    }
`
export default BtnFilled;