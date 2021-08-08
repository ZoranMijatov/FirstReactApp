import React from 'react'
import Button from '../Button';

const Logout = (props) => {
    return (
        <Button type="BtnEmpty" onClick={props.handleClick}>Logout</Button>
    )
}

export default Logout;