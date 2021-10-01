import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: #fff;
  display: inline-block;
  width: 150px;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 20px;
  font-family: Nasa-Font;
`

export const SidebarWrapper = styled.div`
  height: 100%;
  width: 20vw;
  display: flex;
  flex-direction: column;
  gap: 25px;
`