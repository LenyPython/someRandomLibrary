import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-evenly;
  padding: 3em 5%;
  background: red;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: .5em;
    color: white;
    h2 {
      margin: .6em;
    }
    p{
      font-size: 1.1rem;
      margin-bottom: .3em;
      &:hover{
        text-decoration: underline;
        opacity: .6;
        cursor: pointer;
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
        <p>Twiter</p>
        <p>Facebook</p>
        <p>LinkedIn</p>
      </div>



    </StyledFooter>
  )
}

export default Footer
