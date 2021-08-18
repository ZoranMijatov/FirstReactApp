import React from 'react';
import styled from 'styled-components';

const ButtonSolid = styled.button`
    position: relative;
    z-index: 10;
    font-family: 'Montserrat', sans-serif;
    background: transparent;
    border-radius: 7px;
    background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
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

const ButtonGhost = styled(ButtonSolid)`
    background: transparent;
    border: 2px solid #fff;
    color: #fff;
`

const Button = (props) => {

    if(props.type === 'ButtonSolid') {
        return (
            <ButtonSolid onClick={props.onClick}>{props.children}</ButtonSolid>
        )
    }
    else if(props.type === 'ButtonGhost') {
        return (
            <ButtonGhost onClick={props.onClick}>{props.children}</ButtonGhost>
        )
    }
    else  {
        return (
            <button onClick={props.onClick}>{props.children}</button>
        )
    }
}

export default Button;