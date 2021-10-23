import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'


export const PanelGrid = styled.div`
  background: var(--bg-color);
  width: 100%;
  height: 100%;
  padding: 2em;
  display: grid;
  grid-template-columns: 150px 1fr;
`
export const List = styled.div`
width: 100%;
grid-column: 2;
`

export const StyledMenu = styled.div`
  box-sizing: border-box;
  grid-column: 1;
  background: var(--secondary-color);
  border-radius 10px;
  width: 100%;
  padding: .6em;
  text-align: center;
  p{
    margin: .3em auto;
  }
`
export const LinkA = styled(Link)`
  display: inline-block;
  font-weight: 600;
  text-decoration: none;
  width: 90%;
  background: var(--main-color);
  border-radius: .4em;
  border: none;
  padding: .3em 0;
  margin: .3em;
  color: var(--main-button-font-color);
  cursor: pointer;
`
export const Button = styled.button`
  font-weight: 600;
  width: 90%;
  background: var(--main-color);
  border-radius: .4em;
  border: none;
  padding: .3em 0;
  margin: .3em;
  color: var(--main-button-font-color);
  cursor: pointer;
`
export const DisabledBtn = styled.button`
  border-radius: 10px;
  border: none;
  font-size: 1.1rem;
  margin: .5em;
  padding: .3em .6em;
  background: gray;
  color: var(--main-button-font-color);
  cursor: not-allowed;
`

export const StyledA = styled(NavLink)`
  text-decoration: none;
  font-size: 1.2em;
  color: var(--main-header-font-color);
  margin: 0 .6em;
  &.login {
    background: var(--main-color);
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
