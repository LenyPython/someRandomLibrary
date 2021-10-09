import styled from 'styled-components' 
import { 
  selectTheme,
  changeTheme,
  ThemeType
} from '../../slices/components/components'
import { 
  useAppDispatch,
  useAppSelector
} from '../../appStore/hooks'
import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react'


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
  margin-right: 1.3em;
  color: var(--main-header-font-color);
  &:hover {
    opacity: 0.6;
  }
  &:active {
    font-weight: bold;
  }

`

const Navigation = () => {
  const theme = useAppSelector(selectTheme)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(changeTheme())

  }
  return(
  <NavContainer>
    <h1>Bookler</h1>
    <div>
    <StyledA to='/home'> Home </StyledA>
    <StyledA to='/browse'> Browse </StyledA>
    <StyledA to='/account'> Account </StyledA>
      {
       theme === ThemeType.dark?
      <Icon onClick={handleClick} icon="fluent:weather-sunny-24-filled" width="35" height="35" color="yellow"/>:
      <Icon onClick={handleClick} icon="ri:moon-fill" width="35" height="35" color="grey"/>
      }
    </div>
  </NavContainer>
  )}


export default Navigation
