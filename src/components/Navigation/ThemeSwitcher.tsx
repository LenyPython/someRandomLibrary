import styled from 'styled-components'
import { Icon } from '@iconify/react'
import { 
  selectTheme,
  changeTheme,
  ThemeType
} from '../../slices/components/components'
import { 
  useAppDispatch,
  useAppSelector
} from '../../appStore/hooks'


const Switcher = styled.label`
  position:relative;
  width: 80px;
  height: 35px;
  margin-left: 1.2em;
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

const ThemeSwitcher = () => {
  const theme = useAppSelector(selectTheme)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(changeTheme())

  }
  return (
      <Switcher>
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
      </Switcher>

  )
}

export default ThemeSwitcher
