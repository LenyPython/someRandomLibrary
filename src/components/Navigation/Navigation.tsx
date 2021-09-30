import styled from 'styled-components' 
import { Link } from 'react-router-dom'


const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: hsl(0, 100%, 50%);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: .3em 5%;
  margin: 0;
  h1 {
    color: hsl(0, 0%, 0%);
    font-size: 1.5rem;
  }
`
const StyledA = styled(Link)`
  text-decoration: none;
  font-size: 1.2em;
  margin: 0 .6em;
  color: hsl(0, 50%, 10%);
  &:hover {
    opacity: 0.8;
    transform: translateY(-10px);
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
