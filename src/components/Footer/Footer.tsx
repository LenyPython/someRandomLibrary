import styled from 'styled-components'
import { Icon } from '@iconify/react'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-evenly;
  padding: 3em 5%;
  background: var(--main-color);
  width: 100%;
  bottom: 0;
  margin: 50px 0 0;
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: .5em;
    color: var(--main-header-font-color);
    &>div{
      flex-direction: row;
    }
    h2 {
      margin: .6em;
    }
    p{
      font-size: 1.1rem;
      margin: 0 .3em .3em;
      transition: .4s all;
      &:hover{
        opacity: .6;
        cursor: pointer;
        transform: translateY(-.2em);
      }
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <div><h2>Contact</h2>
        <p>Email</p>
        <p>Phone</p>
      </div>
      <div>
        <h2>Not Social</h2>
        <p>Oh i hate nma liveee</p>
        <p>Smthing stupid</p>
      </div>
      <div>
        <h2>Social</h2>
        <div>
          <p>
      <Icon icon="akar-icons:twitter-fill" width='30' height='30'/>
          </p>
          <p>
      <Icon icon="bx:bxl-facebook-square" width='30' height='30' />
          </p>
          <p>
      <Icon icon="akar-icons:linkedin-fill" width='30' height='30' />
          </p>
          <p>
      <Icon icon="bx:bxl-instagram-alt" width='30' height='30'  />
          </p>
        </div>
      </div>



    </StyledFooter>
  )
}

export default Footer
