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
const ThemeSwitcher = styled.label`
  position:relative;
  width: 80px;
  height: 35px;
  input {
    position: relative;
    appearance: none;
    z-index: 1;
  }
  span{
    background: var(--secondary-color);
    position: absolute;
    border-radius: 17px;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    & > div {
      position: absolute;
      top: 5px;
      left: 5px;
    }
   }
   input:checked ~ span div{
    left: 50px;
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
      <ThemeSwitcher>
        <input type="checkbox"
          onChange={handleClick}
          checked={theme === ThemeType.dark}
      />
        <span>
          <div>
      {
       theme === ThemeType.dark?
      <Icon icon="fluent:weather-sunny-24-filled" width="25" height="25" color="yellow"/>:
      <Icon icon="ri:moon-fill" width="25" height="25" color="grey"/>
      }
          </div>
        </span>
      </ThemeSwitcher>
    </div>
  </NavContainer>
  )}


export default Navigation
