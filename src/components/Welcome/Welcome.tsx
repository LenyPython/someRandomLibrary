import styled from 'styled-components'

const WelcomeScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  h1 { 
    font-size: 3em;
    text-decoration: italic;
  }
  p {
    font-size: 1.3em;
    text-decoration: italic;
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
