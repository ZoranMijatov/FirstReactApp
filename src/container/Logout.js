import React from 'react'
import Button from '../Button';

const Logout = (props) => {
    return (
        <Button IsGhost onClick={props.handleClick}>Logout</Button>
    )
}

export default Logout;