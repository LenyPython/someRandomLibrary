import styled from 'styled-components' 
import ThemeSwitcher from './ThemeSwitcher'
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
    font-size: 3.2rem;
  }
  div {
    display: flex;
    align-items: center;
  }
`
const StyledA = styled(NavLink)`
  text-decoration: none;
  font-size: 1.2em;
  color: var(--main-header-font-color);
  margin: 0 .6em;
  &.login {
    border: 1px solid var(--main-header-font-color);
    border-radius: 5px;
    padding: .4em .8em;
  }
  &:hover {
    opacity: .7;
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
    <StyledA className='login' to='/login'> Login </StyledA>
    <StyledA className='login' to='/register'> Register </StyledA>
    <ThemeSwitcher />
    </div>

  </NavContainer>
  )}


export default Navigation
