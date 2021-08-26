import { NavLink } from 'react-router-dom'; 
import React from 'react'
import { SidebarLink, SidebarWrapper } from './Styles';

const Sidebar = () => {
    return (
        <SidebarWrapper>
            <SidebarLink>
                <NavLink className="Link" activeClassName = "Link-Active" to="/dashboard">Dashboard</NavLink>
            </SidebarLink>
            <SidebarLink>
                <NavLink className="Link" activeClassName = "Link-Active" to="/profile">Profile</NavLink>
            </SidebarLink>
            <SidebarLink>
                <NavLink className="Link" activeClassName = "Link-Active" to="/galaxystore">Galaxy Store</NavLink>
            </SidebarLink>
        </SidebarWrapper>
    )
}

export default Sidebar
