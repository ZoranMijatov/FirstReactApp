import { Link } from 'react-router-dom'; 
import React from 'react'

const Sidebar = () => {
    return (
        <div className = "Sidebar">
            <Link className = "Link" to="/dashboard">Dashboard</Link>
            <Link className = "Link" to="/profile">Profile</Link>
            <Link className = "Link" to="/galaxystore">Galaxy Store</Link>
        </div>
    )
}

export default Sidebar
