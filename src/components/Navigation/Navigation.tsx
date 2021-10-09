import styled from 'styled-components' 
import { NavLink } from 'react-router-dom'


const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: var(--nav-height);
  background: var(--main-color);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: auto 5%;
  margin: 0;
  h1 {
    font-family: var(--logo-font);
    color: var(--main-header-font-color);
    font-size: 3rem;
  }
`
const StyledA = styled(NavLink)`
  text-decoration: none;
  font-size: 1.2em;
  margin: 0 .6em;
  color: var(--main-header-font-color);
  &:hover {
    opacity: 0.6;
  }
  &:active {
    font-weight: bold;
  }

`

const Navigation = () => {
  return(
  <NavContainer>
    <h1>Bookler</h1>
    <div>
    <StyledA to='/home'> Home </StyledA>
    <StyledA to='/browse'> Browse </StyledA>
    <StyledA to='/account'> Account </StyledA>
    </div>
  </NavContainer>
  )}


export default Navigation
