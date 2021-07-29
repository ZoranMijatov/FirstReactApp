import React from 'react';
import BtnFilled from './BtnFilled';
import BtnEmpty from './BtnEmpty';

const Button = (props) => {
   
    if(props.type === 'BtnFilled') {
        return (
            <BtnFilled onClick={props.onClick}>{props.children}</BtnFilled>
        )
    }
    else if(props.type === 'BtnEmpty') {
        return (
            <BtnEmpty onClick={props.onClick}>{props.children}</BtnEmpty>
        )
    }
    else  {
        return (
            <button onClick={props.onClick}>{props.children}</button>
        )
    }
}

export default Button;