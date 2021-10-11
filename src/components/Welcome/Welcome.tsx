import styled from 'styled-components'

const WelcomeScreen = styled.div`
  background: var(--bg-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  h1 { 
    font-size: 7rem;
    font-family: var(--logo-font);
  }
  p {
    font-size: 1.3em;
  }
`

const Welcome = () =>{
  return (
    <WelcomeScreen>
      <h1>Welcomek to Bookler</h1>
      <p>HI, hello yeti yatha.. etc. Browse for your books</p>
      </WelcomeScreen>
  )
}

export default Welcome
