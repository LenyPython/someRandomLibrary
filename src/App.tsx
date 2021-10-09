import Navigation from './components/Navigation/Navigation'
import MainContent from './components/MainContent/MainContent'
import GlobalStyle from './components/Styled/GlobalStyle'
import Footer from './components/Footer/Footer'
import './App.css'
import styled from 'styled-components'
import { useAppSelector } from './appStore/hooks'
import { selectTheme } from './slices/components/components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
  width: 90%;
	min-height: 65vh;
`

function App() {
  const theme = useAppSelector(selectTheme)
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
