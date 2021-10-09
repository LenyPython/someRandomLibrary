import Navigation from './components/Navigation/Navigation'
import MainContent from './components/MainContent/MainContent'
import GlobalStyle from './components/Styled/GlobalStyle'
import Footer from './components/Footer/Footer'
import './App.css'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
  width: 90%;
  min-height: 100vh;
`

function App() {
  const theme = false
  return (<>
    <GlobalStyle dark={theme} />
    <Navigation />
      <Container role='main'>
        <MainContent />
      </Container>
    <Footer />
  </>
         );
}

export default App;
