import styled from 'styled-components' 
import ThemeSwitcher from './ThemeSwitcher'
import LogMenu from './LogMenu'
import { StyledA } from '../Styled/Styled'


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

const Navigation = () => {
  return(
  <NavContainer>
    <h1>Bookler</h1>
    <div>
    <StyledA to='/home'> Home </StyledA>
    <StyledA to='/browse'> Browse </StyledA>
    <LogMenu />
    <ThemeSwitcher />
    </div>

  </NavContainer>
  )}


export default Navigation
