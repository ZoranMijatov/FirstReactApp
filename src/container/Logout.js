import React from 'react'
import Button from '../Button';
import { useState } from 'react';

const Logout = (props) => {
    return (
        <Button type="BtnEmpty" onClick={props.handleClick}>Logout</Button>
    )
}

export default Logout;