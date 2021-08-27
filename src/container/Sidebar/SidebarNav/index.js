import React from 'react'
import { SidebarWrapper, StyledNavLink } from './Styles';

const Sidebar = () => {
    return (
        <SidebarWrapper>
            <StyledNavLink className="Link" activeClassName = "Link-Active" to="/dashboard">Dashboard</StyledNavLink>
            <StyledNavLink className="Link" activeClassName = "Link-Active" to="/profile">Profile</StyledNavLink>
            <StyledNavLink className="Link" activeClassName = "Link-Active" to="/galaxystore">Galaxy Store</StyledNavLink>
        </SidebarWrapper>
    )
}

export default Sidebar
